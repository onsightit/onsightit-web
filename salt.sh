#!/bin/bash
echo "*** Starting salt-project..."
MYSQLUSER=salty MYSQLPASS=XXXXXXXX NODE_ENV=development nodemon src/server/server.js
#MYSQLUSER=salty MYSQLPASS=XXXXXXXX NODE_ENV=production node src/server/server.js
#MYSQLUSER=salty MYSQLPASS=XXXXXXXX NODE_ENV=test jest --runInBand
