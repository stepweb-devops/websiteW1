#/bin/bash
buildpath=/home/sahil
echo "$PWD"
cd $buildpath && sudo chmod -R 777 ../*
sudo npm rebuild node-sass && sudo npm i
