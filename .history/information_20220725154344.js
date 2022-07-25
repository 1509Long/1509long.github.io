var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {searchValue()};

function searchValue() {
    let userData = search.value;
    console.log(userData);
    let emptyArray = [];

    if (userData) {
        emptyArray = informationTokenHomePage.filter ((data) => {
            return data.toLocaleLowerCase();
            
        });
        console.log(emptyArray);
    }
}
