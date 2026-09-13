import { forwardRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { productConfig } from "../../config/product";
import { modelParts } from "../../config/modelParts";
import {
  getNodeExplodedPosition,
} from "../../animations/explodeAnimation";

const { path: MODEL_PATH } = productConfig.model;

const ProductModel = forwardRef(function ProductModel(
  {
    scale = productConfig.model.scale,
    position = productConfig.model.position,
    rotation = productConfig.model.rotation,

    /*
     * Animation progress:
     *
     * 0 = assembled
     * 1 = fully exploded
     */
    animationProgress = 0,
  },
  ref
) {
  const { scene } = useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  useEffect(() => {
    const parts = {
      enclosure: model.getObjectByName(modelParts.enclosure),

      topPanel: model.getObjectByName(modelParts.topPanel),

      gainKnob: model.getObjectByName(modelParts.gainKnob),
      gainKnobPointer: model.getObjectByName(
        modelParts.gainKnobPointer
      ),

      toneKnob: model.getObjectByName(modelParts.toneKnob),
      toneKnobPointer: model.getObjectByName(
        modelParts.toneKnobPointer
      ),

      volumeKnob: model.getObjectByName(modelParts.volumeKnob),
      volumeKnobPointer: model.getObjectByName(
        modelParts.volumeKnobPointer
      ),

      leftJack: model.getObjectByName(modelParts.leftJack),
      leftJackInner: model.getObjectByName(
        modelParts.leftJackInner
      ),

      rightJack: model.getObjectByName(modelParts.rightJack),
      rightJackInner: model.getObjectByName(
        modelParts.rightJackInner
      ),

      footswitch: model.getObjectByName(modelParts.footswitch),
      footswitchCap: model.getObjectByName(
        modelParts.footswitchCap
      ),

      statusLED: model.getObjectByName(modelParts.statusLED),

      pcb: model.getObjectByName(modelParts.pcb),

      electronics: modelParts.electronics
        .map((name) => model.getObjectByName(name))
        .filter(Boolean),

      standoffs: modelParts.standoffs
        .map((name) => model.getObjectByName(name))
        .filter(Boolean),
    };

    model.userData.parts = parts;

    /*
     * ---------------------------------------------------------
     * Store original transforms
     * ---------------------------------------------------------
     *
     * These positions represent the assembled product.
     *
     * The animation system will always calculate movement
     * relative to these original positions.
     */
    model.traverse((object) => {
      object.userData.originalPosition = object.position.toArray();
      object.userData.originalRotation = object.rotation.toArray();

      if (!object.isMesh) {
        return;
      }

      object.castShadow = true;
      object.receiveShadow = true;

      object.userData.originalName = object.name;

      if (object.material) {
        object.material.needsUpdate = true;
      }
    });

    /*
     * ---------------------------------------------------------
     * Model-part validation
     * ---------------------------------------------------------
     */

    Object.entries(parts).forEach(([key, object]) => {
      if (Array.isArray(object)) {
        console.log(
          `[idiotPadel] ${key}: ${object.length} objects found`
        );

        return;
      }

      if (!object) {
        console.warn(
          `[idiotPadel] Missing model part: ${key}`
        );
      }
    });
  }, [model]);

  /*
   * ---------------------------------------------------------
   * Explosion animation
   * ---------------------------------------------------------
   *
   * Runs every rendered frame.
   *
   * The animation utility decides where each component
   * should be positioned.
   */
  useFrame(() => {
    model.traverse((object) => {
      const originalPosition =
        object.userData.originalPosition;

      if (!originalPosition) {
        return;
      }

      const animatedPosition =
        getNodeExplodedPosition(
          object.name,
          originalPosition,
          animationProgress
        );

      object.position.set(
        animatedPosition[0],
        animatedPosition[1],
        animatedPosition[2]
      );
    });
  });

  return (
    <group
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={model} />
    </group>
  );
});

ProductModel.displayName = "ProductModel";

useGLTF.preload(MODEL_PATH);

export default ProductModel;