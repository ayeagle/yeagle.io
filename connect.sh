#!/bin/bash
chmod 600 connex.pem

ssh -i "connex.pem" ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com

cd home

pm2 restart server.js

pm2 logs
