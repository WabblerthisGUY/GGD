(() => {
    const headerTemplate = document.createElement('template');
  
    headerTemplate.innerHTML = `
    <style>
      #sidebar {
        width: 250px;
      }
      #sidebar li > a {
          color: white;
          text-decoration: none;
      
      }
      #sidebar li {
          padding-top: .5rem;
          padding-bottom: .5rem;
      }
    </style>
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top">
      <div class="container-fluid">
        <div class="navbar-brand">
            <a href="index.html"><img src="img/GGD.webp" alt="" width="24" height="24" class="d-inline-block align-text-top"></a>
            <b><slot>Grey Ghost Division</slot></b>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">About Us</a>
            <a class="nav-link" href="#">Join Us</a>
            <a class="nav-link" href="#">Cadet Portal</a>
          </div>
        </div>
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