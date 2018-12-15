#/bin/bash
buildpath=/home/sahil
DATE=`date '+%Y-%m-%d %H:%M'`
cd $buildpath && sudo apt-get install zip && sudo apt-get install unzip
cd /var/www && sudo zip -r html.zip html && sudo mkdir -p /backup/$DATE && sudo cp -r html.zip /backup/$DATE && sudo rm -rf /var/www/html.zip
