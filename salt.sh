#!/bin/bash
echo "*** Starting salt-project..."
MYSQLUSER=salty MYSQLPASS=P4ssW0rd NODE_ENV=development nodemon src/server/server.js
#MYSQLUSER=salty MYSQLPASS=P4ssW0rd NODE_ENV=production node src/server/server.js
#MYSQLUSER=salty MYSQLPASS=P4ssW0rd NODE_ENV=test jest --runInBand
