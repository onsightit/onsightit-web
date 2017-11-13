# salt-project
Donald wants to educate his kids about investing in cryptocurrencies. To accomplish this, he will (1) create a "virtual" crypto exchange where they can pretend to buy and sell certain cryptocurrencies. (2) Give them each some Bitcoin for savings. You are Donald.
1. Write a web app using nodeJS and reactJS that tracks the price of Bitcoin (in USD), as well as the prices of Litecoin, Dogecoin, and Ethereum (in BTC). Prices should be the volume-weighted average from at least 3 exchanges. Each kid starts with 10,000 USD, and 0 balance for each crypto asset. The app should allow the kids to place orders and view their portfolio asset distribution and track total value. To keep things simple, all trades must involve BTC. The kids cannot buy alts with USD, and they cannot trade alts for alts. Obviously, we need to know which kid is making the trade, but don't prioritize authentication. Use a DB of your choice. Assume that later, each kid will be developing their own client portals, wanting access to various pieces of data, so design the API accordingly.

# Installation

...
npm install
...

...
$ chmod 755 gencerts.sh
$ ./gencerts.sh
...
