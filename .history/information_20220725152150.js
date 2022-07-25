var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {seachValue(this)};

function seachValue(e) {
    console.log(e.target.value)
}
