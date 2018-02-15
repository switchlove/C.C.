const Discord = require('discord.js');
const client = new Discord.Client();

var coinTicker = require('coin-ticker');
var request = require('request');
var logger = require('winston');

const data = require("./config.json");

const token = data.botToken;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds!`);
  client.user.setPresence({ game: { name: 'crypto || !help', type: 0 } });
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(data.prefix) !== 0) return;
  const args = message.content.slice(data.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }  
  
  if(command === "help") {
    message.channel.send("Converts most cryptocurrencies to USD & BTC:\n !value ETH, this would look up Ethereum.")
    .then(message => {message.delete(5000)}).catch(console.error);
  }

  if(command === "value") {
	var coin = args[0].toUpperCase();
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
					message.channel.send("Current value of " + coin + " ⇒ USD/BTC: $" + body.USD + " ฿" + body.BTC + "\n\n### Major Exchange Rates ###\nBittrex: ฿" + priceb + "\nPoloniex: ฿" + pricep);
				}
			}
		setTimeout(doMessage, 1500);
	})
  }

});

client.login(token);
