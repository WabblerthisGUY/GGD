(() => {
    const headerTemplate = document.createElement('template');
  
    headerTemplate.innerHTML = `
    <link href="custom-bs/custom-bs.css" rel="stylesheet">
    <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid justify-content-start">
        <a class="navbar-brand" href="index.html">
            <img src="img/GGD.webp" alt="" width="24" height="24" class="d-inline-block align-text-top">
        </a>
        <b class="navbar-brand"><slot>Grey Ghost Division</slot></b>

        </div>
    </nav>
    `;
    class Header extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'closed' });

        shadowRoot.appendChild(headerTemplate.content);      
      }
    }
  
    customElements.define('header-component', Header);

  })();