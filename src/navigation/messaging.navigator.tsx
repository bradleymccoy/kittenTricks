import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Chat2Screen } from '../scenes/messaging/chat-2.component';


const Stack = createStackNavigator();

export const MessagingNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Chat2' component={Chat2Screen}/>
  </Stack.Navigator>
);
