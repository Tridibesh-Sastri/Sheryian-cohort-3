import * as THREE from "three";

export function applyProductAnimation(model, progress) {
  if (!model) return;

  const parts = model.userData.parts;

  if (!parts) return;

  const {
    topPanel,
    electronics,
    standoffs,
    pcb,
  } = parts;

  // --------------------------------------------------
  // Normalize progress
  // --------------------------------------------------

  const p = THREE.MathUtils.clamp(progress, 0, 1);

  // --------------------------------------------------
  // TOP PANEL
  // --------------------------------------------------

  if (topPanel) {
    const topPanelProgress = THREE.MathUtils.smoothstep(
      p,
      0.05,
      0.35
    );

    topPanel.position.y =
      THREE.MathUtils.lerp(
        0,
        25,
        topPanelProgress
      );
  }

  // --------------------------------------------------
  // ELECTRONICS
  // --------------------------------------------------

  electronics.forEach((part, index) => {
    const delay = 0.25 + index * 0.04;

    const electronicsProgress =
      THREE.MathUtils.smoothstep(
        p,
        delay,
        Math.min(delay + 0.25, 1)
      );

    const direction = index % 2 === 0 ? 1 : -1;

    part.position.x =
      THREE.MathUtils.lerp(
        0,
        direction * 18,
        electronicsProgress
      );

    part.position.y =
      THREE.MathUtils.lerp(
        0,
        -8,
        electronicsProgress
      );

    part.position.z =
      THREE.MathUtils.lerp(
        0,
        10,
        electronicsProgress
      );
  });

  // --------------------------------------------------
  // STANDOFFS
  // --------------------------------------------------

  standoffs.forEach((part, index) => {
    const delay = 0.30 + index * 0.03;

    const standoffProgress =
      THREE.MathUtils.smoothstep(
        p,
        delay,
        Math.min(delay + 0.2, 1)
      );

    part.position.y =
      THREE.MathUtils.lerp(
        0,
        -6,
        standoffProgress
      );
  });

  // --------------------------------------------------
  // PCB
  // --------------------------------------------------

  if (pcb) {
    const pcbProgress =
      THREE.MathUtils.smoothstep(
        p,
        0.45,
        0.75
      );

    pcb.position.y =
      THREE.MathUtils.lerp(
        0,
        -18,
        pcbProgress
      );
  }
}