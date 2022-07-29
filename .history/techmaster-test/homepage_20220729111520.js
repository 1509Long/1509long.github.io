// Search bar

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
    };

    console.log(emptyArray)
    showValue (emptyArray);
}

function showValue (emptyArray) {
    var tableTR = document.querySelectorAll(".table-body tr");
    var responTableTR = document.querySelectorAll(".table-body-respon tr");

    for (i = 0 ; i < informationTokenHomePage.length ; i++) {
        tableTR[i].classList.add("disappear");
        responTableTR[i].classList.add("disappear");

        if (emptyArray.length > 0) {
            for (j = 0; j < emptyArray.length; j++) {
                if (informationTokenHomePage[i] === emptyArray[j]) {
                    tableTR[i].classList.remove("disappear");
                    responTableTR[i].classList.remove("disappear");
                }
            }
        } else if (emptyArray.length === 0) {
            tableTR[i].classList.remove("disappear");
            responTableTR[i].classList.remove("disappear");
        }
    }
}

      