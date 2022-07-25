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

    putColor(emptyArray);
}

function showValue (list) {
    let table = document.getElementById("table-body");
    let table2 = document.getElementById("table-body-respon");

    table.innerHTML = "";
    table2.innerHTML = "";

    if (!list.length) {
        inToTable(informationTokenHomePage);
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

            table2.appendChild(row2);
        }
    };
}



  function putColor(data) {
    var tableInfoChange = document.querySelectorAll(
        "#table-body tr td:nth-child(4)"
      );
    var tableInfoPrice = document.querySelectorAll(
        "#table-body tr td:nth-child(3)"
      );
    
    var table2InfoChange = document.querySelectorAll(
        "#table-body-respon tr td:nth-child(4)"
      );
    var table2InfoPrice = document.querySelectorAll(
        "#table-body-respon tr td:nth-child(3)"
      );

      console.log(tableInfoChange)
    for (i = 0; i < data.length; i++) {
      tableInfoPrice[i].innerHTML = parseFloat(
        tableInfoPrice[i].textContent
      ).toLocaleString("en-US", { maximumFractionDigits: "5" });

      table2InfoPrice[i].innerHTML = parseFloat(
        table2InfoPrice[i].textContent
      ).toLocaleString("en-US", { maximumFractionDigits: "5" });

      if (parseFloat(data[i].change) > 0) {
        tableInfoChange[i].setAttribute("class", "increase");
        tableInfoPrice[i].setAttribute("class", "increase");

        table2InfoChange[i].setAttribute("class", "increase");
        table2InfoPrice[i].setAttribute("class", "increase");
      } else {
        tableInfoChange[i].setAttribute("class", "decrease");
        tableInfoPrice[i].setAttribute("class", "decrease");

        table2InfoChange[i].setAttribute("class", "decrease");
        table2InfoPrice[i].setAttribute("class", "decrease");
      }
    }
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

      