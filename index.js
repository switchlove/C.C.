var request = require('request');
var Discord = require('discord.io');
var coinTicker = require('coin-ticker');
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
	if (message === ".ping") {
		bot.sendMessage({
			to: channelID,
			message: "pong"
		});
	}
	if (message === '.help') {
		bot.sendMessage({
			to: channelID,
			message: "Checkable currencies: '.btc, .dash, .doge, .eth, .etc, .gno, .gnt, .ltc, .rep, .sc, .strat, .xrp'"
		});	
	}

	if (message==='.btc') {
		coinTicker('bittrex', 'BTC_USD')
   		.then((tick) => {
      			console.log(tick)
 			console.log("BTC/USD: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("BTC/USD: " + tick.last)
		      });
   		})
	}
	
	if (message==='.eth') {
		coinTicker('bittrex', 'ETH_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("ETH/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("ETH/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.etc') {
		coinTicker('bittrex', 'ETC_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("ETC/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("ETC/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.dash') {
		coinTicker('bittrex', 'DASH_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("DASH/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("DASH/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.ltc') {
		coinTicker('bittrex', 'LTC_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("LTC/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("LTC/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.gno') {
		coinTicker('bittrex', 'GNO_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("GNO/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("GNO/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.rep') {
		coinTicker('bittrex', 'REP_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("REP/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("REP/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.xrp') {
		coinTicker('bittrex', 'XRP_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("XRP/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("XRP/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.gnt') {
		coinTicker('bittrex', 'GNT_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("GNT/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("GNT/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.strat') {
		coinTicker('bittrex', 'STRAT_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("STRAT/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("STRAT/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.sc') {
		coinTicker('bittrex', 'SC_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("SC/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("SC/BTC: " + tick.last)
		      });
   		})
	}

	if (message==='.doge') {
		coinTicker('bittrex', 'DOGE_BTC')
   		.then((tick) => {
      			console.log(tick)
 			console.log("DOGE/BTC: " + tick.last);
			bot.sendMessage({
		      	  to: channelID,
		      	  message: ("DOGE/BTC: " + tick.last)
		      });
   		})
	}

});
