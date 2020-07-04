import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import QRScanner  from "../../components/layout/QRScanner";
import Cart from "../../components/layout/Cart";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="QRScanner" component={QRScanner} />
      </Tab.Navigator>
    );
  }

const Tab= createBottomTabNavigator();

