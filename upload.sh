#!/bin/bash

scp -rp -i "connex.pem" "server/server.js" ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com:/home/ec2-user/home


scp -rp  -i "connex.pem" "server/post.js"  ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com:/home/ec2-user/home
