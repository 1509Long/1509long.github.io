var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {searchValue()};

function searchValue() {
    let userData = search.value;
    console.log(typeof(userData));
    let emptyArray = [];

    if (userData) {
        emptyArray = informationTokenHomePage.filter (function(value) {
            return (value.name === userData)
        });
        console.log(emptyArray);
    }
}