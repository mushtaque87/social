#!/bin/bash -l

#echo "set android path"
#export ANDROID_HOME=~/Library/Android/sdk
#export PATH=$ANDROID_HOME/platform-tools:$PATH
#export PATH=$ANDROID_HOME/tools:$PATH

#cp ~/Downloads/release.keystore ./android/app/
#cp ~/Downloads/keystore.properties ./android/
cd android
echo '******** GRADLE CLEAN ********'
./gradlew clean
cd ..
echo '******** Node Clean and Install ********'
rm -rf node_modules/ && rm -rf yark.lock && yarn install
#cp -f env/dev/.env.dev .env
echo '******** Yarn Start ********'
yarn start
echo '******** Build Android ********'
yarn android
