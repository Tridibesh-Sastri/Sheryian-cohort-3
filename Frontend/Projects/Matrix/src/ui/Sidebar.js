export class Sidebar {
  constructor(element) {
    this.element = element;
  }

  render(content = []) {
    this.element.innerHTML = `
      <div class="panel-title">Workspace</div>
      ${content
        .map(
          (item) => `
            <section class="card">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </section>
          `,
        )
        .join('')}
    `;
  }
}
