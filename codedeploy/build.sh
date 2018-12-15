#/bin/bash
buildpath=/home/sahil
newbuild=/build/latest
echo $PWD
cd $buildpath && sudo npm update && sudo npm run build
sudo rm -r -f $newbuild && sudo mkdir -p $newbuild && sudo cp -r $buildpath/build $newbuild
