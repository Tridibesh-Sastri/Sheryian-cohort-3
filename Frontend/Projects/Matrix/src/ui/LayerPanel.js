export class LayerPanel {
  constructor(element) {
    this.element = element;
  }

  render(layers = []) {
    this.element.innerHTML = `
      <div class="card">
        <h3>Layers</h3>
        <p>${layers.map((layer) => layer.name).join(', ') || 'No layers yet'}</p>
      </div>
    `;
  }
}
