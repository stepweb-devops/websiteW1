#/bin/bash
buildpath=/opt/build
build=$buildpath/build
newbuild=/build/latest
echo $PWD
cd $buildpath && sudo npm install && sudo rm -rf $build && sudo npm run build
sudo rm -r -f $newbuild && sudo mkdir -p $newbuild && sudo cp -r $build/* $newbuild
