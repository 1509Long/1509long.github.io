var searchBar = document.querySelector(".search-bar");
var search = document.querySelector(".search");

search.onkeyup = function() {searchValue()};

function searchValue() {
    let userdata = search.value;
    console.log(userdata);
    let emptyArray = [];

    if (userdata) {
        emptyArray = informationTokenHomePage.filter ((data) => {
            return data;
            
        });
        console.log(emptyArray);
    }
}
