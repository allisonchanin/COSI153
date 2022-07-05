import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Async1Screen from './async1';
import Async2Screen from './async2';
import Async3Screen from './async3';
import Async4Screen from './async4';
import Async5Screen from './async5';

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={Async1Screen} />
        <Tab.Screen name="Age" component={Async2Screen} />
        <Tab.Screen name="BMI" component={Async3Screen} />
        <Tab.Screen name="Give Feedback" component={Async4Screen} />
        <Tab.Screen name="See Feedback" component={Async5Screen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}