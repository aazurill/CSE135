# CSE135

CSE 135 Readme:

Droplet hostname: CSE 135
IP Address: 143.198.63.147
Root Password: d1gitAloc3an

mysql password & root password: 123456789

Users:
Username: grader
Password: 123456

Username: ethan
Password: 123456

Website: https://ethantans.site/

Website authentication username + password (Part 3 Step 4):
Username: ethan
Password: 123456

Part 2:
Description of GitHub Deployment:
In order to enable github deploying on my project, what I did was add a GitHub action to a repository in my name containing the website files. Inside this action yaml file, what I did was specify that whenever there was a push to this specific repository, I would ssh into the DigitalOcean droplet containing the files for my personal website. I would make a git clone request to this repository, copy all the relevant files from the repo, and then rsync those files with those inside of relevant website folders inside of var/www/ to essentially “update” the websites.

Part 3 Step 5 (Summary of changes to HTML file in DevTools after compression):
Once I enabled compression, what happened was my HTML files were sent in a compressed format which saved on file space. Once they were sent, the files were then unpacked which overall improved efficiency by reducing the amount of data which was sent over the network while resulting in the same results.

Part 3 Step 6 (Summary of removing ‘server’ header):
In order to obscure server identity, what I did was first install apache’s libapache2-mod-security2 module, and then enabled the security features. I then edited the /etc/apache2/apache2.conf and added these lines to the file:
“Server Tokens Full”
“SecServerSignature “CSE135 Server”
