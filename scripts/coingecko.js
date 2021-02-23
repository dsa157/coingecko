//getExchanges();
//console.log("-----------------");
//getCoins();
getCoin("bitcoin");

function createRequest(url) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            parse(myArr);
        }
    };
    
    req.open("GET", url);
    req.setRequestHeader("Content-Type", "application/json");
    return req;
}

function getExchanges()
{
    var url = "https://api.coingecko.com/api/v3/exchanges"; 
    var req = createRequest(url);
    req.send();
}

function getCoins()
{
    var url = "https://api.coingecko.com/api/v3/coins/list"; // + coin; 
    var req = createRequest(url);
    req.send();
}

function getCoin(id)
{
    var url = "https://api.coingecko.com/api/v3/coins/" + id; 
    var req = createRequest(url);
    req.send();
}

function parse(arr) {
    console.log(arr);
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += arr[i].id + "\n";
    }
    console.log(out);
}
