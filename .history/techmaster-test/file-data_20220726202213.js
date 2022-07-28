// Data token file (all of html)
var informationTokenHomePage = [
    btc = {
      box1: '<i class="fas fa-star watch-list btc" onclick=btc.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/1.png" class="img-fluid size" alt="" /><p>BTC</p><p>Bitcoin</p></div>',
      name: "btc",
      price: "20636.74",
      change: "+1.85%",
      volumn: "88,110 BTC",
      link: '<a href="./dashboard.html" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let btc = document.querySelector(".btc");
        if (btc.classList.contains("yellow")) {
          btc.classList.remove("yellow");
        } else {
          btc.classList.add("yellow");
          
          let watchList = document.getElementById("watch-list");
          console.log(watchList);
        }


        // btc.classList.toggle("yellow");
        // console.log(this === informationTokenHomePage[0])
      },
    },
    eth = {
      box1: '<i class="fas fa-star watch-list eth" onclick=eth.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/3.png" class="img-fluid size" alt="" /><p>ETH</p><p>Ethereum</p></div>',
      name: "eth",
      price: "1100.25",
      change: "+1.64%",
      volumn: "1,154,553 ETH",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let eth = document.querySelector(".eth");
        eth.classList.toggle("yellow");
        console.log(this)
      },
    },
    ltc = {
      box1: '<i class="fas fa-star watch-list ltc" onclick=ltc.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/2.png" class="img-fluid size" alt="" /><p>LTC</p><p>Litecoin</p></div>',
      name: "ltc",
      price: "55.73",
      change: "+8.52%",
      volumn: "969,966 LTC",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let ltc = document.querySelector(".ltc");
        ltc.classList.toggle("yellow");
        console.log(this)
      },
    },
    iotx = {
      box1: '<i class="fas fa-star watch-list iotx" onclick=iotx.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/176.png" class="img-fluid size" alt="" /><p>IOTX</p><p>IoTeX</p></div>',
      name: "iotx",
      price: "0.02814",
      change: "+7.69%",
      volumn: "113,572,567 IOTX",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let iotx = document.querySelector(".iotx");
        iotx.classList.toggle("yellow");
        console.log(this)
      },
    },
    trx = {
      box1: '<i class="fas fa-star watch-list trx" onclick=trx.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/27.png" class="img-fluid size" alt="" /><p>TRX</p><p>TRON</p></div>',
      name: "trx",
      price: "0.06396",
      change: "-0.84%",
      volumn: "531,756,787 TRX",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let trx = document.querySelector(".trx");
        trx.classList.toggle("yellow");
        console.log(this)
      },
    },
    eos = {
      box1: '<i class="fas fa-star watch-list eos" onclick=eos.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/14.png" class="img-fluid size" alt="" /><p>EOS</p><p>EOS</p></div>',
      name: "eos",
      price: "0.96",
      change: "+3.00%",
      volumn: "12,651,466 EOS",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let eos = document.querySelector(".eos");
        eos.classList.toggle("yellow");
        console.log(this)
      },
    },
    theta = {
      box1: '<i class="fas fa-star watch-list theta" onclick=theta.myMethod()></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/175.png" class="img-fluid size" alt="" /><p>THETA</p><p>Theta Token</p></div>',
      name: "theta",
      price: "1.275",
      change: "+2.05%",
      volumn: "8,488,073 THETA",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
      myMethod: function() {
        let theta = document.querySelector(".theta");
        theta.classList.toggle("yellow");
        console.log(this)
      },
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/298.png" class="img-fluid size" alt="" /><p>OGN</p><p>Origin Token</p></div>',
      name: "ogn",
      price: "0.2548",
      change: "+4.64%",
      volumn: "32,921,522 OGN",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/214.png" class="img-fluid size" alt="" /><p>TFUEL</p><p>Theta Fuel</p></div>',
      name: "tfuel",
      price: "0.0523",
      change: "+3.35%",
      volumn: "30,303,503 TFUEL",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/49.png" class="img-fluid size" alt="" /><p>REP</p><p>Augur v2</p></div>',
      name: "rep",
      price: "8.61",
      change: "-2.16%",
      volumn: "219,627 REP",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/172.png" class="img-fluid size" alt="" /><p>TUST</p><p>TrusUSDT</p></div>',
      name: "tust",
      price: "1.0092",
      change: "0.00%",
      volumn: "6,467,790 TUSD",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/13.png" class="img-fluid size" alt="" /><p>QTUM</p><p>Qtum</p></div>',
      name: "qtum",
      price: "2.871",
      change: "-4.74%",
      volumn: "1,092,661 QTUM",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/6.png" class="img-fluid size" alt="" /><p>NEO</p><p>NEO</p></div>',
      name: "neo",
      price: "9.22",
      change: "+1.99%",
      volumn: "359,376 NEO",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_FTT.png" class="img-fluid size" alt="" /><p>FTT</p><p>FTX Token</p></div>',
      name: "ftt",
      price: "29.16",
      change: "+1.32%",
      volumn: "295,879 FTT",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/133.png" class="img-fluid size" alt="" /><p>GTO</p><p>Gifto</p></div>',
      name: "gto",
      price: "0.0168",
      change: "+8.03%",
      volumn: "122,482,877 GTO",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_RUNE.png" class="img-fluid size" alt="" /><p>RUNE</p><p>THORChain</p></div>',
      name: "rune",
      price: "2.393",
      change: "+5.65%",
      volumn: "11,376,851 RUNE",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_FTM.png" class="img-fluid size" alt="" /><p>FTM</p><p>Fantom</p></div>',
      name: "ftm",
      price: "0.2767",
      change: "+4.56%",
      volumn: "87,719,488 FTM",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_CAKE.png" class="img-fluid size" alt="" /><p>CAKE</p><p>PancakeSwap</p></div>',
      name: "cake",
      price: "3.368",
      change: "+2.71%",
      volumn: "1,198,386 CAKE",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_GTC.png" class="img-fluid size" alt="" /><p>GTC</p><p>Gitcoin</p></div>',
      name: "gtc",
      price: "2.709",
      change: "+9.76%",
      volumn: "2,167,263 GTC",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_SNX.png" class="img-fluid size" alt="" /><p>SNX</p><p>Synthetix Network</p></div>',
      name: "snx",
      price: "2.823",
      change: "+0.56%",
      volumn: "2,947,815 SNX",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_KAVA.png" class="img-fluid size" alt="" /><p>KAVA</p><p>Kava.io</p></div>',
      name: "kava",
      price: "1.818",
      change: "+2.88%",
      volumn: "3,838,653 KAVA",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_SRM.png" class="img-fluid size" alt="" /><p>SRM</p><p>Serum</p></div>',
      name: "srm",
      price: "1.089",
      change: "-0.37%",
      volumn: "3,543,020 SRM",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_SAND.png" class="img-fluid size" alt="" /><p>SAND</p><p>The Sandbox</p></div>',
      name: "sand",
      price: "1.2635",
      change: "+1.3%",
      volumn: "28,950,283 SAND",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_SOL.png" class="img-fluid size" alt="" /><p>SOL</p><p>Solana</p></div>',
      name: "sol",
      price: "42.2",
      change: "+5.26%",
      volumn: "3,929,353 SOL",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_LINK.png" class="img-fluid size" alt="" /><p>LINK</p><p>ChainLink</p></div>',
      name: "link",
      price: "6.719",
      change: "+2.28%",
      volumn: "5,706,705 LINK",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
    {
      box1: '<i class="fas fa-star watch-list" onclick="yellowStar(this)"></i>',
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_STORJ.png" class="img-fluid size" alt="" /><p>STORJ</p><p>Storj</p></div>',
      name: "storj",
      price: "0.6923",
      change: "-0.11%",
      volumn: "4,389,402 STORJ",
      link: '<a href="#" class="click-here">Giao dịch ngay</a>',
    },
  ];


// Assets of the account file (wallet.html)
var AssetsOfAccount = [
    {
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_BNB.png" class="img-fluid size" alt="" /><p>BNB</p><p>Binance Coin</p></div>',
      name: "BNB",
      quantity: "15",
      USDT: "2500",
      averageCost: "222.5938",
      bidPrice: "227.5938",
      pnlUSDT: "+98",
      pnl: "+5.05%",
    },
    {
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/3.png" class="img-fluid size" alt="" /><p>ETH</p><p>Ethereum</p></div>',
      name: "ETH",
      quantity: "0.56",
      USDT: "2000",
      averageCost: "964.05",
      bidPrice: "1065.75",
      pnlUSDT: "+256",
      pnl: "+25.05%",
    },
    {
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/1.png" class="img-fluid size" alt="" /><p>BTC</p><p>Bitcoin</p></div>',
      name: "BTC",
      quantity: "0.02365",
      USDT: "1500",
      averageCost: "27643.07",
      bidPrice: "27625.07",
      pnlUSDT: "-45",
      pnl: "-15.29%",
    },
    {
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_KAVA.png" class="img-fluid size" alt="" /><p>KAVA</p><p>Kava.io</p></div>',
      name: "KAVA",
      quantity: "1658",
      USDT: "500",
      averageCost: "1.25985",
      bidPrice: "1.67985",
      pnlUSDT: "+236",
      pnl: "+36.05%",
    },

    {
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_RUNE.png" class="img-fluid size" alt="" /><p>RUNE</p><p>THORChain</p></div>',
      name: "RUNE",
      quantity: "1268",
      USDT: "450",
      averageCost: "1.06598",
      bidPrice: "2.06320",
      pnlUSDT: "+159",
      pnl: "+45.05%",
    },

    {
      asset:
        '<div class="d-flex align-items-center asset"><img src="./img/icon_STORJ.png" class="img-fluid size" alt="" /><p>STORJ</p><p>Storj</p></div>',
      name: "STORJ",
      quantity: "2684",
      USDT: "350",
      averageCost: "0.95887",
      bidPrice: "0.64435",
      pnlUSDT: "-239",
      pnl: "-15.05%",
    },
  ];


// Transaction History file (wallet.html)
var transactionOfAccount = [
    {
      time: "2022-06-21 10:00",
      transaction: "Mua",
      tradingPair: "USDT / BTC",
      name: "BTC",
      orderPrice: "27643.07",
      fee: "2",
      quantityOfToken: "+0,02365 BTC",
      quantityOfUSDT: "2500 USDT",
    },
    {
      time: "2022-06-20 11:50",
      transaction: "Bán",
      tradingPair: "RUNE / USDT",
      name: "RUNE",
      orderPrice: "2.003",
      fee: "1.75",
      quantityOfToken: "-275 RUNE",
      quantityOfUSDT: "275 USDT",
    },
    {
      time: "2022-06-17 21:00",
      transaction: "Mua",
      tradingPair: "USDT / ETH",
      name: "ETH",
      orderPrice: "1195.82",
      fee: "4.78",
      quantityOfToken: "+0.56 ETH",
      quantityOfUSDT: "2000 USDT",
    },
  ];


// Code of transaction (wallet.html)
var code = [
    "#56HYBG",
    "#56HABG",
    "#53HZBG",
    "#53HJBG",
    "#53HMBG",
    "#53HKBG",
    "#53HCBG",
  ];
