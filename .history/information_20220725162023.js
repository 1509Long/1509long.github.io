var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {searchValue()};

function searchValue() {
    let userData = String(search.value).toLocaleUpperCase;
    console.log(userData);
    let emptyArray = [];

    // if (userData) {
    //     emptyArray = informationTokenHomePage.filter (function(value) {
    //         // return (userData.toLocaleUpperCase === value.name);
    //     });
    //     console.log(emptyArray);
    // }
}
