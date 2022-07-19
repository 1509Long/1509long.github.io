      var transactionOfAccount = [
        {
          time: "2022-06-21 10:00",
          transaction: "Mua",
          tradingPair: "USDT / BTC",
          name: "BTC",
          orderPrice: "27643.07",
          fee: "2",
          quantityOfToken: "0,02365 BTC",
          quantityOfUSDT: "-2500 USDT",
        },
        {
          time: "2022-06-20 11:50",
          transaction: "Bán",
          tradingPair: "RUNE / USDT",
          name: "RUNE",
          orderPrice: "2.003",
          fee: "1.75",
          quantityOfToken: "275 RUNE",
          quantityOfUSDT: "+275 USDT",
        },
        {
          time: "2022-06-17 21:00",
          transaction: "Mua",
          tradingPair: "USDT / ETH",
          name: "ETH",
          orderPrice: "1195.82",
          fee: "4.78",
          quantityOfToken: "0.56 ETH",
          quantityOfUSDT: "-2000 USDT",
        },
      ];

      var code = [
        "#56HYBG",
        "#56HABG",
        "#53HZBG",
        "#53HJBG",
        "#53HMBG",
        "#53HKBG",
        "#53HCBG",
      ];

      var push = {
        time: "",
        transaction: "Mua",
        tradingPair: "",
        name: "",
        orderPrice: "",
        fee: "",
        quantityOfToken: "",
        quantityOfUSDT: "",
      };

      var transactionTable = document.querySelector(".body-transaction");
      function inToTransactionTable(data) {
        for (var i = 0; i < data.length; i++) {
          var historyTable = data[i];
          let row = document.createElement("tr");

          let firstBox = document.createElement("td");
          firstBox.innerHTML = code[i];
          row.appendChild(firstBox);

          let key = [
            "time",
            "transaction",
            "tradingPair",
            "orderPrice",
            "fee",
            "quantityOfToken",
            "quantityOfUSDT",
          ];

          for (var j = 0; j < key.length; j++) {
            let cell = document.createElement("td");

            cell.innerHTML = historyTable[key[j]];
            row.appendChild(cell);
          }
          transactionTable.appendChild(row);
        }
      }

      inToTransactionTable(transactionOfAccount);

      function otpBuyConfirm() {
        // transactionOfAccount.splice(0, 0, push);
        // console.log(transactionOfAccount);
        let key = [
          "time",
          "transaction",
          "tradingPair",
          "orderPrice",
          "fee",
          "quantityOfToken",
          "quantityOfUSDT",
        ];
        console.log(push.length);
        let extrarow = document.createElement("tr");

        let first = document.createElement("td");
        first.innerHTML = code[1];
        extrarow.append(first);

        for (var i = 0; i < Object.keys(push).length - 1; i++) {
          let extracell = document.createElement("td");

          extracell.innerHTML = push[key[i]];
          extrarow.append(extracell);
        }
        transactionTable.prepend(extrarow);

        let pustTheSecondTr = document.querySelector(
          ".body-transaction tr:first-child td:nth-child(2)"
        );
        let now = new Date();
        pustTheSecondTr.innerHTML =
          now.getFullYear() +
          "-" +
          (now.getMonth() + 1) +
          "-" +
          now.getDate() +
          " " +
          now.getHours() +
          ":" +
          now.getMinutes();

        push.time = pustTheSecondTr.innerHTML;
        console.log(push);
        transactionOfAccount.splice(0, 0, push);
        console.log(transactionOfAccount);
      }

      function copyText () {
        var vanlong = document.querySelector(".buy-sell-transaction-table");
        // var haivan = document.querySelector(".conquy");

        console.log(vanlong);

      }
copyText();