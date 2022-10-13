(() => {
  const fromTheBridgeTemplate = document.createElement('template');

  fromTheBridgeTemplate.innerHTML = `
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link href="custom-bs/custom-bs.css" rel="stylesheet">

      <style>
          #from-the-bridge {
              height: 100%;
              display: flex;
              flex-direction: column;
              gap: 1rem;
          }   
          #ftb-container {
              display:flex;
              flex-direction: column;
              overflow: auto;
              -ms-overflow-style: none;  /* Internet Explorer 10+ */
              scrollbar-width: none;  /* Firefox */
              height: 100%;
          }
          
          #ftb-container::-webkit-scrollbar { 
              display: none;  /* Safari and Chrome */
          }
      </style>
      <div id="ftb-container">
      <h3 class="text-muted position-sticky top-0 bg-black p-2">FROM THE BRIDGE</h3>
      <div id="from-the-bridge">
        <div class="bg-white rounded-3 pb-2 px-2">
          <p class="text-end text-muted fw-bold"><small>DATE</small></p>
          <h3>October Drill</h3>
          <p class="text-primary">
            STUFF IS HAPPENING
          </p>
        </div>

      </div>
  `;
  class FromTheBridge extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let shadowRoot = this.attachShadow({ mode: 'closed' });

      shadowRoot.appendChild(fromTheBridgeTemplate.content);
    }
  }

  customElements.define('from-the-bridge', FromTheBridge);

})();