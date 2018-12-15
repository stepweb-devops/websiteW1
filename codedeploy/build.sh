#/bin/bash
buildpath=/build/latest
sudo npm install && sudo npm run build
sudo rm -r -f $buildpath && sudo mkdir -p $buildpath && sudo cp -r build/* $buildpath
