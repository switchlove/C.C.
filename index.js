var Discord = require('discord.io');
var coinTicker = require('coin-ticker');
var request = require('request');
var data = require("./config.json");

botToken = data.botToken;

var bot = new Discord.Client({
  token: botToken,
  autorun: true
});

bot.on('ready', function() {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
	let prefix = ".";

	if (message.startsWith(prefix + "ping")) {
    bot.sendMessage({
      to: channelID,
			message: "pong"
		});
	}
	
	if (message.startsWith(prefix + "help")) {
		bot.sendMessage({
			to: channelID,
			message: "Converts most cryptocurrencies to USD & BTC:\n .value COINHERE"
		});	
	}
	
	if (message.startsWith(prefix + "value")) {
		let args = message.split(" ").slice(1);
		let coin = args[0].toUpperCase();
		var url = 'https://min-api.cryptocompare.com/data/price?fsym=' + coin + '&tsyms=BTC,USD';
		request({
      url: url,
      json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
        var str2 = "_BTC";
        var res = coin.concat(str2);
        if(res == "BTC_BTC"){
          var res = "BTC_USD"; 
        } else
          var priceb; var pricep; var pricediff;
          coinTicker('bittrex', res)
            .then((tick) => {
            console.log("Bittrex: ฿" + tick.last)
            priceb = tick.last
          })
          coinTicker('poloniex', res)
            .then((tick2) => {
            console.log("Poloniex: ฿" + tick2.last)
            pricep = tick2.last
          })
          function doMessage() {
            bot.sendMessage({
              to: channelID,
              message: ("Current value of " + coin + " ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC + "\n\n### Major Exchange Rates ###\nBittrex: ฿" + priceb + "\nPoloniex: ฿" + pricep)
            });
          }
        }
        setTimeout(doMessage, 600);
		})
	}
  
});
