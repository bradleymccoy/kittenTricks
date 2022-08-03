import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { ArticlesNavigator } from './articles.navigator';
import { MessagingNavigator } from './messaging.navigator';
import { DashboardsNavigator } from './dashboards.navigator';
import { EcommerceNavigator } from './ecommerce.navigator';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={LayoutsScreen}/>
    <Stack.Screen name='Articles' component={ArticlesNavigator}/>
    <Stack.Screen name='Dashboards' component={DashboardsNavigator}/>
  </Stack.Navigator>
);
