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

    showValue (emptyArray);

}

function showValue (list) {
    var table = document.getElementById("table-body");
    var responTable = document.getElementById("table-body-respon");

    // table.innerHTML = "";
    // responTable.innerHTML = "";

    if (!list.length) {
        function aganin() {
            inToTable(informationTokenHomePage);

            // putColor(informationTokenHomePage);
        }

        aganin()

    } else {
        
        
        for (i = 0; i < list.length; i++) {
            let infomationSearchValue = list[i];
    
            let row = document.createElement("tr");
            let row2 = document.createElement("tr");
    
            let key = ["box1", "asset", "price", "change", "volumn", "link"];
            let key2 = ["box1", "asset", "price", "change", "link"];
    
            for (j = 0; j < key.length; j++) {
                let cell = document.createElement("td");
                cell.innerHTML = infomationSearchValue[key[j]];
    
              row.appendChild(cell);
            }

            table.appendChild(row);

            for (e = 0; e < key2.length; e++) {
                let cell2 = document.createElement("td");
                cell2.innerHTML = infomationSearchValue[key2[e]];
    
                row2.appendChild(cell2);
              }

              responTable.appendChild(row2);
        }
    };
}



// Watchlist

function yellowStar(x) {
    x.classList.toggle("yellow");
    let arr = [];

    for ( i = 0 ; i < informationTokenHomePage.length ; i++) {
        if ( x !== informationTokenHomePage[i].box1) {
            arr.push(informationTokenHomePage[i]);
        }
    }
    console.log(arr);
    console.log(x);
}

      