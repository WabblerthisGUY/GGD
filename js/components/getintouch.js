
(() => {
    const getInTouchTemplate = document.createElement('template');
  
    getInTouchTemplate.innerHTML = `
      <div style="max-width:350px;margin-left:auto;margin-right:auto;">
        <h1 class="text-uppercase text-center py-2">Get in touch today</h1>
        <form>
          <input type="text" placeholder="Name" class="form-control mb-1">
          <input type="email" placeholder="Email" class="form-control mb-1">
          <textarea type="text" placeholder="Tell us about yourself!" class="form-control mb-1" rows="3"></textarea>
          <button type="submit" class="btn btn-primary mb-1">Submit</button>
        </form>
      </div>
    `;
    class GetInTouch extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {  
        this.innerHTML = getInTouchTemplate.innerHTML;
      }
    }
  
    customElements.define('get-in-touch', GetInTouch);

})();