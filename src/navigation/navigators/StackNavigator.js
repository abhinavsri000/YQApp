import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {Tabs} from '../navigators/BottomTabNavigator';
const HomeStack = createStackNavigator();
export function StackNav () {
    return(
    <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Tabs" >
        <HomeStack.Screen name="Tabs" component={Tabs} />
    </HomeStack.Navigator>
    );
}