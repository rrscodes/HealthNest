# HealthNest

[![Build status](https://build.appcenter.ms/v0.1/apps/c63201ce-3d96-433d-963e-55cfd4fca947/branches/master/badge)](https://appcenter.ms)

Mobile app of a new kind of social network of communities of patients suffering/recovering from severe diseases like Covid-19 and Cancer.

### App Architecture

HealthNest uses below dependencies :

* [React Native] - Written in JavaScript—rendered with native code
* [Redux] - A Predictable State Container 
* [MS App Center] - Continuously build, test, release and monitor apps
* [Bugsnag] - Error monitoring & reporting 
* [React Navigation v5] - Routing and navigation for React Native apps
* [react-native-animatable] - Declarative transitions and animations for React Native



 - The App is built using React Native 
  - It uses Redux for state-management
  - It uses "react-native-animatable" to animate few components
  - Appcenter is used for CI/CD and is configured on Master branch
  - Bugsnag is used as error reporting tool
  
Few other dependencies are:
  - React Naviagtion v5
  - App Center - Analytics and Crashes
  - react-native-vector-icons
  And other dependencies can be found in package.json

### How to run the app

HealthNest requires React Native setup done on the machine [Check this for React Native setup](https://reactnative.dev/docs/environment-setup)

Clone and Install the dependencies and devDependencies.

```sh
$ git clone https://github.com/roshansingh21/HealthNest.git
$ cd HealthNest
$ yarn
or
$ npm install
```

To run on devices or emulator/simulator
### For Android
```sh
$ yarn android
or
$ npm run android
```
### For iOS
```sh
$ yarn ios
or
$ npm run ios
```
Below is the source directory structure
```
├───assets/
│   └───images/
├───components/
│   ├───ArticlesCard.js
│   ├───Chip.js
│   └───NewModal.js
├───redux/
│   ├───actionTypes/
│   │   └───index.js
│   ├───actions/
│   │   ├───auth.action.js
│   │   ├───feeds.action.js
│   │   └───logout.action.js
│   ├───reducers/
│   │   ├───auth.reducer.js
│   │   ├───feeds.reducer.js
│   │   └───index.js
│   └───store.js
├───routes/
│   ├───RootNavigation.js
│   └───index.js
├───screens/
│   ├───Feed/
│   │   ├───Feed.js
│   │   ├───PostCard.js
│   │   ├───ShareModal.js
│   │   ├───actionModal.js
│   │   ├───index.js
│   │   ├───postStyle.js
│   │   └───style.js
│   ├───Library/
│   │   ├───Library.js
│   │   ├───index.js
│   │   └───style.js
│   ├───Messages/
│   │   ├───Messages.js
│   │   ├───index.js
│   │   └───style.js
│   ├───Question/
│   │   ├───Question.js
│   │   ├───index.js
│   │   └───style.js
│   ├───Services/
│   │   ├───Services.js
│   │   ├───index.js
│   │   └───style.js
│   ├───SignIn/
│   │   ├───SignIn.js
│   │   ├───index.js
│   │   └───style.js
│   └───Splash/
│       └───index.js
├───utils/
│   ├───URLs.js
│   ├───api.js
│   ├───constants.js
│   ├───data.js
│   └───theme.js
└───index.js

```



### Todos
 - Add Questions Screen
 - Write Tests
 - Optimize the reaction animation




   [React Native]: <https://reactnative.dev/>
   [Redux]: <https://redux.js.org/>
   [MS App Center]: <https://appcenter.ms/>
   [Bugsnag]:<https://www.bugsnag.com/>
   [React Navigation v5]: <https://reactnavigation.org/>
   [react-native-animatable]: <https://github.com/oblador/react-native-animatable/>
   
   