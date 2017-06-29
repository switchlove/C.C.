var Discord = require('discord.io');
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

	if (message === '.ping') {
		bot.sendMessage({
			to: channelID,
			message: "pong"
		});
	}
	
	if (message === '.help') {
		bot.sendMessage({
			to: channelID,
			message: "Converts most cryptocurrencies to USD & BTC: .value COINHERE"
		});	
	}
	
	if (message === '.help2') {
		bot.sendMessage({
			to: channelID,
			message: "Old conversion commands: '.btc, .dash, .doge, .esp, .eth, .etc, .gno, .gnt, .ltc, .rep, .sc, .strat, .xrp'"
		});	
	}

	if (message === '.btc') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("BTC/USD: " + body.USD);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("BTC ⇒ USD: $" + body.USD)
			  	});
			}
		})
	}
	
	if (message === '.eth') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("ETH/USD: " + body.USD + " & ETH/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("ETH ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.etc') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("ETC/USD: " + body.USD + " & ETC/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("ETC ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.dash') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("DASH/USD: " + body.USD + " & DASH/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("DASH ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.ltc') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("LTC/USD: " + body.USD + " & LTC/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("LTC ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.gno') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=GNO&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("GNO/USD: " + body.USD + " & GNO/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("GNO ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.rep') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=REP&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("REP/USD: " + body.USD + " & REP/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("REP ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.xrp') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("XRP/USD: " + body.USD + " & XRP/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("XRP ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.gnt') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=GNT&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("GNT/USD: " + body.USD + " & GNT/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("GNT ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.strat') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=STRAT&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("STRAT/USD: " + body.USD + " & STRAT/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("STRAT ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.sc') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=SC&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("SC/USD: " + body.USD + " & SC/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("SC ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.doge') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("DOGE/USD: " + body.USD + " & DOGE/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("DOGE ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

	if (message === '.esp') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=ESP&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("ESP/USD: " + body.USD + " & ESP/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("ESP ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}

        if (message === '.test') {
                var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD';
		request({
    			url: url,
   			 json: true
		}, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("ETH/USD: " + body.USD + " & ETH/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: ("ETH ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
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
				console.log(coin + "/USD: " + body.USD + " & " + coin + "/BTC: " + body.BTC);
				bot.sendMessage({
       	   	                  to: channelID,
          	                  message: (coin + " ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC)
			  	});
			}
		})
	}
	
});
