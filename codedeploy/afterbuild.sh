#/bin/bash
DATE=`date '+%Y-%m-%d %H:%M'`
sudo apt-get install zip && sudo apt-get install unzip
cd /var/www/html && sudo zip -r html.zip html && sudo mkdir -p /backup/$DATE && sudo cp -r html.zip /backup/$DATE