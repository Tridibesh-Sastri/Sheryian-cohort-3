/**
 * Explosion animation configuration for the idiotPadel product.
 *
 * This file contains ONLY animation mathematics/configuration.
 *
 * It does not:
 * - access React
 * - access the Canvas
 * - load the GLB
 * - manipulate Three.js objects directly
 *
 * Later, ProductModel.jsx will consume these values.
 */

/**
 * All distances are expressed as local Three.js units.
 *
 * Progress:
 * 0 = completely assembled
 * 1 = completely exploded
 */

const EXPLOSION_DISTANCE = {
  topPanel: 28,

  knobs: 10,

  electronics: 18,

  standoffs: 12,
};

/**
 * Component groups.
 *
 * These names correspond to the node names inside idiotPadel.glb.
 */
export const EXPLOSION_GROUPS = {
  topPanel: ["TopPanel"],

  knobs: [
    "GainKnob",
    "GainKnob_Pointer",
    "ToneKnob",
    "ToneKnob_Pointer",
    "VolumeKnob",
    "VolumeKnob_Pointer",
  ],

  electronics: [
    "PCB_PLACEHOLDER",
    "Electronics_1",
    "Electronics_2",
    "Electronics_3",
    "Electronics_4",
  ],

  standoffs: [
    "Standoff_1",
    "Standoff_2",
    "Standoff_3",
    "Standoff_4",
  ],
};

/**
 * Explosion directions.
 *
 * Y is the vertical axis in our current product scene.
 */
const EXPLOSION_DIRECTION = {
  topPanel: [0, 1, 0],

  knobs: [0, 1, 0],

  electronics: [0, -1, 0],

  standoffs: [0, -0.5, 0],
};

/**
 * Linear interpolation.
 *
 * Example:
 *
 * lerp(0, 100, 0.5)
 * → 50
 */
function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

/**
 * Clamp a value between 0 and 1.
 *
 * This protects the animation from invalid progress values.
 */
function clampProgress(progress) {
  return Math.min(Math.max(progress, 0), 1);
}

/**
 * Calculate the animated position of a component.
 *
 * `originalPosition` should be the component's original
 * position inside the GLB.
 *
 * The function does NOT mutate the original array.
 */
export function getExplodedPosition(
  originalPosition,
  group,
  progress,
) {
  const safeProgress = clampProgress(progress);

  const distance = EXPLOSION_DISTANCE[group];
  const direction = EXPLOSION_DIRECTION[group];

  if (!distance || !direction) {
    return [...originalPosition];
  }

  const targetPosition = [
    originalPosition[0] + direction[0] * distance,
    originalPosition[1] + direction[1] * distance,
    originalPosition[2] + direction[2] * distance,
  ];

  return [
    lerp(originalPosition[0], targetPosition[0], safeProgress),
    lerp(originalPosition[1], targetPosition[1], safeProgress),
    lerp(originalPosition[2], targetPosition[2], safeProgress),
  ];
}

/**
 * Find which animation group a GLB node belongs to.
 *
 * Returns:
 *
 * "topPanel"
 * "knobs"
 * "electronics"
 * "standoffs"
 *
 * or null if the object should not move.
 */
export function getExplosionGroup(nodeName) {
  for (const [group, nodeNames] of Object.entries(EXPLOSION_GROUPS)) {
    if (nodeNames.includes(nodeName)) {
      return group;
    }
  }

  return null;
}

/**
 * Calculate the animated position for a GLB node.
 *
 * This will be the main function consumed by ProductModel.jsx.
 */
export function getNodeExplodedPosition(
  nodeName,
  originalPosition,
  progress,
) {
  const group = getExplosionGroup(nodeName);

  if (!group) {
    return [...originalPosition];
  }

  return getExplodedPosition(
    originalPosition,
    group,
    progress,
  );
}