#!/bin/sh
echo '******** MAKE MODULE File Changes ********'
sed -i -e 's/s.homepage     = ""/s.homepage     = "git+https:\/\/github.com\/pankajgupta1\/react-native-tap-payment.git"/g' node_modules/react-native-tap-payment/ios/RNTapPayment.podspec
sed -i -e 's/s.homepage     = ""/s.homepage     = "https:\/\/github.com\/onemolegames\/react-native-toast-native"/g' node_modules/react-native-toast-native/ios/RNToastNative.podspec

sed -i -e '39,44 s/^/#/'  node_modules/@react-native-firebase/analytics/RNFBAnalytics.podspec
sed  -i.bak '38i\
 s.static_framework = true' node_modules/@react-native-firebase/analytics/RNFBAnalytics.podspec

sed -i -e '32,37 s/^/#/'  node_modules/@react-native-firebase/app/RNFBapp.podspec
sed  -i.bak '31i\
 s.static_framework = true' node_modules/@react-native-firebase/app/RNFBapp.podspec

 sed -i -e '39,44 s/^/#/'  node_modules/@react-native-firebase/messaging/RNFBMessaging.podspec
sed  -i.bak '38i\
 s.static_framework = true' node_modules/@react-native-firebase/messaging/RNFBMessaging.podspec

 sed -i -e '39,44 s/^/#/'  node_modules/@react-native-firebase/perf/RNFBPerf.podspec
sed  -i.bak '38i\
 s.static_framework = true' node_modules/@react-native-firebase/perf/RNFBPerf.podspec

