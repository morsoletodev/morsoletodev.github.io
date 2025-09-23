

class Sidebar extends HTMLElement {
    constructor() {
        super()

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
            <style>
                @import "../css/colors.css";
                @import "../css/bootstrap/bootstrap.min.css";
                @import "../css/animations.css";

                /* Links */
                .nav-link.active {
                    font-weight: 600;
                }

                .nav-link,
                .nav-link:visited,
                .nav-link:focus {
                    color: var(--gray3-less_focus) !important;
                }

                .nav-link:hover {
                    color: var(--gray3);
                }

                .link-a,
                .link-a:visited,
                .link-a:focus {
                    color: var(--gray3-less_focus) !important;
                    -webkit-tap-highlight-color: transparent;
                    outline: none;
                    background-color: var(--orange);
                }

                /* Colors and font */
                #name {
                    color: var(--gray3);
                }

                #descr {
                    font-size:16px; 
                    color: var(--gray2);
                }


                hr {
                    color: var(--gray3);
                }

                /* Others */
                img#avatar {
                    border-radius: 50%;
                    filter: saturate(1.25);
                }

                #box-div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: auto;
                }
            </style>

            <div class="p-4">
                <img id="avatar" src="/assets/img/file.jpg" 
                 alt="Avatar" class="img-fluid">
            </div>
            
            <h3 class="text-center mb-2 fade-in" id="name">R. Morsoleto</h3>
            <p class="text-center fade-in delay-1" id="descr">Desenvolvedor Python | Data Analytics</p>

            <hr>

            <ul class="nav flex-column my-3">
                <li class="nav-item">
                    <a class="nav-link active fade-in" aria-current="page" href="/index.html">Sobre Mim</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link fade-in delay-1" href="/html/projects.html">Projetos</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/html/skills.html">Tech Stack</a>
                </li> --> 
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/html/timeline.html">Participações</a>
                </li> -->
            </ul>

            <hr>

            <div id="box-div">
                <a class="link-a btn text-decoration-none" href="/assets/pdf/morsoletoCV.pdf" download>Download CV</a>
            </div>
        `
    }

    connectedCallback() {
        this.addEventListeners()
        this.setActiveStateBasedOnUrl()
    }

    addEventListeners() {
        const links = this.shadowRoot.querySelectorAll('.nav-link')

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                this.updateActiveState(link)

                setTimeout(
                    () => { window.location.href = link.getAttribute('href') },
                    150
                )
            })
        })
    }

    updateActiveState(clickedLink) {
        const links = this.shadowRoot.querySelectorAll('.nav-link')

        links.forEach(link => {
            link.classList.remove('active')
            link.removeAttribute('aria-current')
        })

        clickedLink.classList.add('active')
        clickedLink.setAttribute('aria-current', 'page')
    }

    setActiveStateBasedOnUrl() {
        const currentPath = window.location.pathname
        const links = this.shadowRoot.querySelectorAll('.nav-link')

        links.forEach(link => {
            const linkPath = link.getAttribute('href')

            if (currentPath === linkPath
                || (currentPath === '/' && linkPath === '/index.html')
                || (currentPath.endsWith('/') && linkPath === currentPath + 'index.html'))
                this.updateActiveState(link)
        })
    }
}

customElements.define('info-sidebar', Sidebar)