if(document.cookie.indexOf("authorized") === -1) {
    console.log(1);

    window.location.replace(document.baseURI + "protected.html?redirect=" + encodeURIComponent(window.location.pathname+window.location.search));
}