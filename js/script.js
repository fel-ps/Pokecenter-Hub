class AppNavbar extends HTMLElement {
    connectedCallback() {
        if (this.dataset.initialized === 'true') return;

        this.dataset.initialized = 'true';
        this.classList.add('app-navbar-host');

        const title = this.getAttribute('title') || 'Navbar';
        const linksAttr = this.getAttribute('links');
        let links = [];

        try {
            links = linksAttr ? JSON.parse(linksAttr) : [];
        } catch (error) {
            console.warn('Links do componente inválidos:', error);
        }

        if (!Array.isArray(links) || links.length === 0) {
            links = [
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Design', href: '#design' },
                { label: 'Contact us', href: '#contact' }
            ];
        }

        const items = links.map(({ label, href }) => `
            <li class="navbar-component__link">
                <a href="${href || '#'}">${label}</a>
            </li>
        `).join('');

        this.innerHTML = `
            <section class="navbar-component" aria-label="${title}">
                <button class="navbar-component__toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav class="navbar-component__nav">
                    <ul class="navbar-component__links">${items}</ul>
                </nav>

                <div class="navbar-component__decor">
                    <span class="box"></span>
                    <span class="box"></span>
                    <span class="box"></span>
                    <span class="box"></span>
                    <span class="box"></span>
                    <span class="box"></span>
                </div>
            </section>
        `;

        const toggle = this.querySelector('.navbar-component__toggle');
        const nav = this.querySelector('.navbar-component__nav');
        const icon = toggle.querySelector('span');

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");

            toggle.classList.toggle("is-active", isOpen);
            toggle.setAttribute("aria-expanded", isOpen);
        });
    }
}

customElements.define('app-navbar', AppNavbar);