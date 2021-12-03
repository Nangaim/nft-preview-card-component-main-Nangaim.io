const paragraph = document.querySelector(".eth-api")
fetch("https://api.ethereumdb.com/v1/ticker?pair=ETH-USD&range=1h")
.then(res => res.json())
.then(data => paragraph.innerText = Math.round(100*parseFloat(data.price))/100 + " ETH")
