# #!/bin/bash

# scp -rp -i "connex.pem" "server/server.js" ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com:/home/ec2-user/home


# scp -rp  -i "connex.pem" "server/logActivity.js"  ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com:/home/ec2-user/home


# scp -rp  -i "connex.pem" "server/checkUser.js"  ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com:/home/ec2-user/home


scp -rp -i "connex.pem" "server" ec2-user@ec2-44-210-111-39.compute-1.amazonaws.com:/home/ec2-user
