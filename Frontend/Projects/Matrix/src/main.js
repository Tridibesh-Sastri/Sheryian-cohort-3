import { presets } from './data/presets.js';
import { Workspace } from './core/Workspace.js';
import { AxisRenderer } from './render/AxisRenderer.js';
import { GridRenderer } from './render/GridRenderer.js';
import { LayerPanel } from './ui/LayerPanel.js';
import { Sidebar } from './ui/Sidebar.js';
import { Toolbar } from './ui/Toolbar.js';

const canvas = document.getElementById('workspace-canvas');
const toolbarElement = document.getElementById('toolbar');
const sidebarElement = document.getElementById('sidebar');
const layerPanelElement = document.getElementById('layer-panel');

if (!canvas || !toolbarElement || !sidebarElement || !layerPanelElement) {
  throw new Error('Matrix workspace markup is missing required elements.');
}

const workspace = new Workspace(canvas);
const toolbar = new Toolbar(toolbarElement);
const sidebar = new Sidebar(sidebarElement);
const layerPanel = new LayerPanel(layerPanelElement);
const gridRenderer = new GridRenderer();
const axisRenderer = new AxisRenderer();

const defaultLayer = workspace.createLayer('Construction');
const referenceLayer = workspace.createLayer('Reference', { visible: true });

toolbar.render([
  { id: 'add-layer', label: 'Add Layer' },
  { id: 'toggle-grid', label: 'Toggle Grid' },
  { id: 'reset-view', label: 'Reset View' },
]);

sidebar.render([
  {
    title: 'Presets',
    description: presets.map((preset) => preset.label).join(' • '),
  },
  {
    title: 'Camera',
    description: 'Pan and zoom controls can be connected here later.',
  },
]);

layerPanel.render([defaultLayer, referenceLayer]);

function resizeCanvas() {
  const { width, height } = canvas.getBoundingClientRect();
  workspace.resize(Math.max(1, width), Math.max(1, height));
}

function renderFrame() {
  resizeCanvas();

  const { context } = workspace.renderer;
  const width = canvas.width;
  const height = canvas.height;

  workspace.render();
  gridRenderer.render(context, width, height);
  axisRenderer.render(context, width, height);

  requestAnimationFrame(renderFrame);
}

window.addEventListener('resize', resizeCanvas);
renderFrame();
