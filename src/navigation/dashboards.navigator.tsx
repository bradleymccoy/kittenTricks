import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DashboardScreen } from '../scenes/dashboards/dashboards.component';
import { DashboardGridScreen } from '../scenes/dashboards/dashboards-grid.component';
import { Trainings1Screen } from '../scenes/dashboards/trainings-1.component';

const Stack = createStackNavigator();

export const DashboardsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Trainings1' component={Trainings1Screen}/>
  </Stack.Navigator>
);
