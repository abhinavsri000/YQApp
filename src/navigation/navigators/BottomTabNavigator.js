import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Login from '../../components/layout/Login';
import Splash from '../../components/layout/Splash';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BBHome from '../../components/layout/BBHome';
export function Tabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'QRScanner') {
            return (
              <Icon name='home' size={size} color={color}/>
              );
          } else if (route.name === 'Cart') {
            return (
              <Icon name='cart' size={size} color={color}/>
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          height: hp('9%'),
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0.5,
          shadowOffset: {width: 5, height: 3},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 15,
          paddingBottom : hp('1%'),
        },
      }}
      >
        <Tab.screen name="Home" component={BBHome}/>
        <Tab.Screen name="Cart" component={Splash} />
        <Tab.Screen name="QRScanner" component={Login} />
      </Tab.Navigator>
    );
  }

const Tab= createBottomTabNavigator();

