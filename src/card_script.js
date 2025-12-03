class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const title = this.getAttribute("title");
        const img = this.getAttribute("img");
        const alt = this.getAttribute("alt");
        const desc = this.getAttribute("desc");
        const link = this.getAttribute("link");

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                background: var(--card-bg);
                padding: var(--card-padding);
                border-radius: var(--card-radius);
                display: block;
            }
        </style>

        <h2>${title}</h2>
        <picture>
            <img src="${img}" alt="${alt}" width="280">
        </picture>
        <p>${desc}</p>
        <a href="${link}">Learn More</a>
        `;
    }
}

customElements.define("project-card", ProjectCard);
