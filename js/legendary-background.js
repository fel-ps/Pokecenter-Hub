class LegendaryBackground extends HTMLElement {

    connectedCallback() {

        this.innerHTML = `
            <div class="background"></div>

            <div class="particles">
                ${"<span></span>".repeat(15)}
            </div>
        `;

    }

}

customElements.define("legendary-background", LegendaryBackground);