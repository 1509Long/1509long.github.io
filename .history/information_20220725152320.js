var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {seachValue()};

function seachValue() {
    console.log(search.target.value)
}
