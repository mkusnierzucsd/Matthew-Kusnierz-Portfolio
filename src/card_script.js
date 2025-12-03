class ProjectCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                background: var(--card-bg);
                padding: var(--card-padding);
                border-radius: var(--card-radius);
                display: block;
            }
        </style>

        <h2>My Cool Project</h2>
        <picture>
            <img src="/assets/CAHousingProj.png" alt="Screenshot of My Cool Project" width="240">
        </picture>
        <p>A short description of my project.</p>
        <a href="https://example.com">Learn More</a>
        `;
    }
}

customElements.define("project-card", ProjectCard);
