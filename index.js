var request = require('request');
var Discord = require('discord.io');
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
			message: "Commandes possibles : '.btc, .eth, gdax'"
		});	
	}

	if (message === ".btc") {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=xbtusd';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XXBTZUSD.a[0]);
		      msg = data.result.XXBTZUSD.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("BTC/USD : " + msg)
		      });
		  }
		});
	}
	
	if (message==='.eth') {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=ethusd';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XETHZUSD.a[0]);
		      msg = data.result.XETHZUSD.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("ETH/USD : " + msg)
		      });
		  }
		});
	}
	
	if (message==='.dash') {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=dashusd';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.DASHUSD.a[0]);
		      msg = data.result.DASHUSD.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("DASH/USD : " + msg)
		      });
		  }
		});
	}
	
	if (message==='.ltc') {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=ltcusd';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XLTCZUSD.a[0]);
		      msg = data.result.XLTCZUSD.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("KRAKEN - ETH/USD : " + msg)
		      });
		  }
		});
	}
	
});
