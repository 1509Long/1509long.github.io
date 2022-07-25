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

    for (var i = 0; i < list.length; i++) {
        var infomationSearchValue = list[i];

        var row = document.createElement("tr");

        var key = ["box1", "asset", "price", "change", "volumn", "link"];

        for (var j = 0; j < key.length; j++) {
          var cell = document.createElement("td");
          cell.innerHTML = infomationSearchValue[key[j]];

          row.appendChild(cell);
        }

        table.appendChild(row);
    }

}

      