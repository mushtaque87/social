#!/bin/sh
echo '******** CLEAN Build and Node Modules ********'
rm -rf ~/Library/Developer/Xcode/DerivedData/*
rm -rf package-lock.json
rm -rf yarn.lock
rm -rf node_modules/ && yarn install
#sed -i -e 's/#import <React\/RCTImageLoaderProtocol.h>//g' node_modules/@react-native-community/cameraroll/ios/RNCCameraRollManager.m
#echo '******** MAKE MODULE File Changes ********'
#sed -i -e 's/s.homepage     = ""/s.homepage     = "git+https:\/\/github.com\/pankajgupta1\/react-native-tap-payment.git"/g' node_modules/react-native-tap-payment/ios/RNTapPayment.podspec
#
#sed -i -e '43,48 s/^/#/'  node_modules/@react-native-firebase/analytics/RNFBAnalytics.podspec
#sed  -i.bak '42i\
# s.static_framework = true' node_modules/@react-native-firebase/analytics/RNFBAnalytics.podspec
#
#sed -i -e '32,37 s/^/#/'  node_modules/@react-native-firebase/app/RNFBapp.podspec
#sed  -i.bak '31i\
# s.static_framework = true' node_modules/@react-native-firebase/app/RNFBapp.podspec
#
# sed -i -e '44,49 s/^/#/'  node_modules/@react-native-firebase/messaging/RNFBMessaging.podspec
#sed  -i.bak '43i\
# s.static_framework = true' node_modules/@react-native-firebase/messaging/RNFBMessaging.podspec
#
# sed -i -e '43,48 s/^/#/'  node_modules/@react-native-firebase/perf/RNFBPerf.podspec
#sed  -i.bak '42i\
# s.static_framework = true' node_modules/@react-native-firebase/perf/RNFBPerf.podspec
./scripts/update_iosmodules.sh

#cp -f env/dev/.env.dev .env
#cp -f env/dev/GoogleService-Info.plist ios/GoogleService-Info.plist
echo '******** Pod Install ********'
cd ios && rm -rf Pods/ && pod deintegrate && rm -rf Podfile.lock && pod install
cd ..
#echo '******** Yarn Start ********'
#yarn start
echo '******** Run iOS App ********'
yarn ios-simulator

