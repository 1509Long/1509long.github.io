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

    // if (emptyArray === 0) {
        for (i = 0; i < emptyArray.length; i++) {
            for (j = 0 ; j < informationTokenHomePage.length ; j++) {
                tableTR[j].classList.add("disappear");
    
                if (informationTokenHomePage[j] === emptyArray[i]) {
                    console.log("TRUE")
                } else {
                    console.log("FALSE")
                }
            }
        }
    }
    
// }

// function showValue (list) {
//     var table = document.getElementById("table-body");
//     var responTable = document.getElementById("table-body-respon");

//     table.innerHTML = "";
//     responTable.innerHTML = "";

//     if (!list.length) {
//         inToTable(informationTokenHomePage);

//     } else {
        
        
//         for (i = 0; i < list.length; i++) {
//             let infomationSearchValue = list[i];
    
//             let row = document.createElement("tr");
//             let row2 = document.createElement("tr");
    
//             let key = ["box1", "asset", "price", "change", "volumn", "link"];
//             let key2 = ["box1", "asset", "price", "change", "link"];
    
//             for (j = 0; j < key.length; j++) {
//                 let cell = document.createElement("td");
//                 cell.innerHTML = infomationSearchValue[key[j]];
    
//               row.appendChild(cell);
//             }

//             table.appendChild(row);

//             for (e = 0; e < key2.length; e++) {
//                 let cell2 = document.createElement("td");
//                 cell2.innerHTML = infomationSearchValue[key2[e]];
    
//                 row2.appendChild(cell2);
//               }

//               responTable.appendChild(row2);
//         }
//     };
// }

      