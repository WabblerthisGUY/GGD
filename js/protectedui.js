(() => {

})();

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const SUPER_SECRET_CODE = "AARONISOK";
function validate() {
    if(document.getElementById("password").value == SUPER_SECRET_CODE) {
        //console.log(params.redirect);
        //60 sec to a minute, 60 minute to an hour. 24 hours to a day, 10 days.
        document.cookie = "authorized=true; max-age=" + 60 * 60 * 24 * 10;
        window.location.replace(params.redirect);
    }
    else  {
        document.getElementById("fail").classList.remove("d-none");
    }
}
function checkSubmit(e) {
    if(e && e.keyCode == 13) validate();
}