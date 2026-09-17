import { getNodeExplodedPosition } from "./explodeAnimation";

export function applyProductAnimation(model, progress) {
  if (!model) return;

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
        progress
      );

    object.position.set(
      animatedPosition[0],
      animatedPosition[1],
      animatedPosition[2]
    );
  });
}