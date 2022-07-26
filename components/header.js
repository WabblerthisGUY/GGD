(() => {
    const headerTemplate = document.createElement('template');
  
    headerTemplate.innerHTML = `
    <style>
        header-component + * {
            padding-top:56px;
        }
    </style>
    <nav class="navbar navbar-dark bg-primary fixed-top">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="img/GGD.webp" alt="" width="30" height="24" class="d-inline-block align-text-top">
            <b><slot>Grey Ghost Division</slot></b>
        </a>
        </div>
    </nav>
    `;
    class Header extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        this.innerHTML = headerTemplate.innerHTML;
      }
    }
  
    customElements.define('header-component', Header);

  })();