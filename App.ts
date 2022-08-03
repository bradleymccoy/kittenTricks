//import { withAuthenticator, SignIn } from 'aws-amplify-react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import awsmobile from './src/app/aws-exports';
import App from './src/app/app.component';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true
  }
});

export default withAuthenticator(App);
// export default App;