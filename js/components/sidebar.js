
(() => {
  const sidebarTemplate = document.createElement('template');

  sidebarTemplate.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link href="custom-bs/custom-bs.css" rel="stylesheet">

      <style>
          #open-sidebar {
              position: fixed;
              right: 10px;
              top: 10px;
              z-index: 9997;
              cursor: pointer;
          }
          
          #sidebar {
              min-width: 250px;
              max-width: 250px;
              height: 100vh;
              position: fixed;
              top: 0;
              right: -250px;
              /* top layer */
              z-index: 9999;
              transition: all 0.3s;
          }
          #sidebar.on {
              right: 0;
          }
          
          #darken {
              display: none;
              position: fixed;
              /* full screen */
              width: 100vw;
              height: 100vh;
              /* transparent black */
              background: rgba(0, 0, 0, 0.7);
              /* middle layer, i.e. appears below the sidebar */
              z-index: 998;
              opacity: 0;
              /* animate the transition */
              transition: all 0.5s ease-in-out;
              left: 0;
          }
          /* display .overlay when it has the .on class */
          #darken.on {
              display: block;
              opacity: 1;
          }
          
          li > a {
              color: white;
              text-decoration: none;
          
          }
          li {
              padding-top: .5rem;
              padding-bottom: .5rem;
          }
      </style>
      <span class="material-symbols-outlined text-white" id="open-sidebar">
        menu
      </span>
      <nav id="sidebar" class="bg-primary text-white px-4 pt-4">
        <h4>Grey Ghost Division & T.S. Kearsarge</h1>
        <ul class="list-unstyled">
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="cadets.html">Cadets/Parents</a>
            <ul class="list-unstyled ps-4">
              <li><a href="pod.html">POD</a></li>
              <li><a href="">Calendar</a></li>
              <li><a href="">Announcements</a></li>
              <li><a href="chainofcommand.html">Chain of Command</a></li>
              <li><a href="supply.html">Supply</a></li>
              <li><a href="">Resources</a></li>
              <li><a href="https://quarterdeck.seacadets.org/">Quarterdeck</a></li>
              <li><a href="">Payment</a></li>
            </ul>
          </li>
          <li>
            <a href="prospect.html">Prospective Cadets</a>
          </li>
          <li>
            <a href="staff.html">Officers</a>
          </li>
        </ul>
      </nav>
      <div id="darken"></div>
  `;
  var shadowRoot;
  class Sidebar extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      shadowRoot = this.attachShadow({ mode: 'closed' });

      shadowRoot.appendChild(sidebarTemplate.content);
    }
  }

  customElements.define('sidebar-component', Sidebar);

  function closeSidebar() {
      console.log("close")
      shadowRoot.getElementById("sidebar").classList.remove("on");
      shadowRoot.getElementById("darken").classList.remove("on");
  }
  function openSidebar() {

      console.log("open")
      shadowRoot.getElementById("sidebar").classList.add("on");
      console.log("open2")

      shadowRoot.getElementById("darken").classList.add("on");
  }

  shadowRoot.getElementById("open-sidebar").onclick = openSidebar;
  shadowRoot.getElementById("darken").onclick = closeSidebar;
})();