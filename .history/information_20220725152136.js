var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {seachValue(e)};

function seachValue(e) {
    console.log(e.target.value)
}
