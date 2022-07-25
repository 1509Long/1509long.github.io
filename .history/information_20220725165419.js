var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {searchValue()};

function searchValue() {
    let userData = search.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = informationTokenHomePage.filter (function(value) {
            return (value.name.startsWith(userData));
        });
        console.log(emptyArray);

    }

    showValue (emptyArray);
}

function showValue (list) {
    let table = document.getElementById("table-body");
    table.innerHTML = "";


}
