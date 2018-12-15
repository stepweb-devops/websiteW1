#/bin/bash
buildpath=/build/latest
deploypath=/var/www/html
sudo rm -r -f $deploypath && sudo mkdir -p $deploypath
sudo cp -r  $buildpath/* $deploypath
