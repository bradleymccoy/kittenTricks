import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ForgotPasswordScreen } from '../scenes/forgotpassword/forgot-password.component';
import { SignIn1Screen } from '../scenes/auth/sign-in-1.component'

const Stack = createStackNavigator();

export const ForgotPasswordNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
    <Stack.Screen name='SignIn1' component={SignIn1Screen} />
  </Stack.Navigator>
);
