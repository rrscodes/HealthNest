/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { Client, Configuration } from 'bugsnag-react-native';

console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
const config = new Configuration('43fa25b2c8b442b123696aaa287c21f3');
const bugsnag = new Client(config);

// react-native bundle \
//     --platform android \
//     --dev false \
//     --entry-file index.js \
//     --bundle-output android-release.bundle \
//     --sourcemap-output android-release.bundle.map

// curl --http1.1 https://upload.bugsnag.com/react-native-source-map \
//    -F apiKey='43fa25b2c8b442b123696aaa287c21f3' \
//    -F appVersion=1.0 \
//    -F dev=false \
//    -F platform=android \
//    -F sourceMap=@android-release.bundle.map \
//    -F bundle=@android-release.bundle \
//    -F projectRoot=`pwd`

// react-native bundle \
//     --platform ios \
//     --dev false \
//     --entry-file index.js \
//     --bundle-output ios-release.bundle \
//     --sourcemap-output ios-release.bundle.map

// curl --http1.1 https://upload.bugsnag.com/react-native-source-map \
//    -F apiKey='43fa25b2c8b442b123696aaa287c21f3' \
//    -F appVersion=1.0 \
//    -F dev=false \
//    -F platform=ios \
//    -F sourceMap=@ios-release.bundle.map \
//    -F bundle=@ios-release.bundle \
//    -F projectRoot=`pwd`
