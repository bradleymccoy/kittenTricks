
import { AppRegistry, LogBox } from 'react-native';
import App from '../app/app.component';
import { name as appName } from '../../app.json';

LogBox.ignoreWarnings([
  'Warning: AsyncStorage',
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`'
])

//window.LOG_LEVEL = 'DEBUG'

AppRegistry.registerComponent(appName, () => App)