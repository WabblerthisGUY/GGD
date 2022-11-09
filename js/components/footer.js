
(() => {
    const footerTemplate = document.createElement('template');
  
    footerTemplate.innerHTML = `
    <footer class="bg-black container-fluid p-5">
      <div class="row text-white fw-bold mb-4">
        <div class="offset-1 col-5">Grey Ghost Division/Training Ship Kearsarge</div>
        <div class="offset-1 col-5">Follow Us</div>
      </div>
      <div class="row text-white-50 pb-5">
        <div class="offset-1 col-5">
          <a href="./" class="text-reset text-decoration-none">Home</a><br>
          <a href="" class="text-reset text-decoration-none">About us</a><br>
          <a href="staff.html" class="text-reset text-decoration-none">Meet our staff</a><br>
          <a href="resources.html" class="text-reset text-decoration-none">Resources</a><br>
          <a href="https://quarterdeck.seacadets.org/" class="text-reset text-decoration-none">Quarterdeck</a><br>
        </div>
        <div class="offset-1 col-5">
          <a href="" class="text-reset fs-4"><i class="bi bi-facebook"></i></a>
          <a href="" class="text-reset fs-4"><i class="bi bi-instagram"></i></a>
          <br>
          <button class="btn btn-outline-light mt-2">JOIN US</button>
        </div>
      </div>
    </footer>
    `;
    class Footer extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {  
        this.innerHTML = footerTemplate.innerHTML;
      }
    }
  
    customElements.define('footer-component', Footer);

  })();