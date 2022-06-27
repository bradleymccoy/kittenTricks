import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import { awsmobile } from './src/aws-exports';
import { createStackNavigator } from '@react-navigation/stack';
//import { AuthScreen } from '../scenes/auth/auth.component';
import { SignIn1Screen } from '../scenes/auth/sign-in-1.component';
import { SignUp1Screen } from '../scenes/auth/sign-up-1.component';
import { ForgotPasswordScreen } from '../scenes/forgotpassword/forgot-password.component';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='SignIn1' component={SignIn1Screen} />
    <Stack.Screen name='SignUp1' component={SignUp1Screen} />
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
  </Stack.Navigator>
);
