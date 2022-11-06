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
    <nav class="navbar navbar-dark bg-primary fixed-top">
      <div class="container-fluid">
        <div class="navbar-brand">
            <a href="index.html"><img src="img/GGD.webp" alt="" width="24" height="24" class="d-inline-block align-text-top"></a>
            <b><slot>Grey Ghost Division</slot></b>
        </div>

        <a class="navbar-toggler" type="button" data-bs-toggle="offcanvas" href="#sidebar">
          <span class="navbar-toggler-icon"></span>
        </a>
      </div>
    </nav>
    <div id="sidebar" class="bg-primary text-white px-4 pt-4 offcanvas offcanvas-end">
      <h4>Grey Ghost Division & T.S. Kearsarge</h1>
      <ul class="list-unstyled">
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="cadets.html">Cadets/Parents</a>
          <ul class="list-unstyled ps-4">
            <li><a href="pod.html">POD</a></li>
            <li><a href="calendar.html">Calendar</a></li>
            <li><a href="announcements.html">Announcements</a></li>
            <li><a href="chainofcommand.html">Chain of Command</a></li>
            <li><a href="supply.html">Supply</a></li>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="https://quarterdeck.seacadets.org/">Quarterdeck</a></li>
            <li><a href="payment.html">Payment</a></li>
          </ul>
        </li>
        <li>
          <a href="prospect.html">Prospective Cadets</a>
        </li>
        <li>
          <a href="staff.html">Officers</a>
        </li>
      </ul>
    </div>
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