
(() => {
    const footerTemplate = document.createElement('template');
  
    footerTemplate.innerHTML = `
    <link href="custom-bs/custom-bs.css" rel="stylesheet">
  
    <footer class="py-2 text-center text-white bg-black">
        <div class="row g-0">
            <img class="col-2 offset-2 col-md-1 offset-md-4" src="img/USNSCC.png">
            <img class="col-2 col-md-1" src="img/GGD.webp">
            <img class="col-2 col-md-1" src="img/TSK.png">
            <img class="col-2 col-md-1" src="img/NLCC.png">
        </div>
        <h4>United States Naval Sea Cadet Corps</h3>
        <h6>Grey Ghost Division and Training Ship Kearsarge</h5>
      </footer>
    `;
    var shadowRoot;
    class Footer extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        shadowRoot = this.attachShadow({ mode: 'closed' });
  
        shadowRoot.appendChild(footerTemplate.content);
      }
    }
  
    customElements.define('footer-component', Footer);

  })();