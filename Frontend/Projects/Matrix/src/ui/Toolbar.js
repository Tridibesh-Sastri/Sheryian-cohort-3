export class Toolbar {
  constructor(element) {
    this.element = element;
  }

  render(actions = []) {
    this.element.innerHTML = `
      <div class="panel-title">Toolbar</div>
      <div class="button-list">
        ${actions
          .map((action) => `<button type="button" data-action="${action.id}">${action.label}</button>`)
          .join('')}
      </div>
    `;
  }
}
