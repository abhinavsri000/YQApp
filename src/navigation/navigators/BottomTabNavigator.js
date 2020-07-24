import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import QRScanner from '../../components/layout/QRScanner';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Home from '../../components/layout/Home';
import Cart from '../../components/layout/Cart';
export function Tabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Icon name='home' size={size} color={color}/>
              );
          } else if (route.name === 'Cart') {
            return (
              <Icon  name='shoppingcart' size={size} color={color}/>
            );
          }
          else if (route.name === 'Scanner') {
            return (
              <Icon name='scan1' size={size} color={color}/>
            );
          }
        },
      }
      )}
      tabBarOptions={{
        activeTintColor: '#121278',
        inactiveTintColor: '#0078d4',
        style: {
          height: hp('8%'),
          paddingTop:hp('1%'),
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          shadowOffset: {width: 5, height: 3},
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 15,
          paddingBottom : hp('1%'),
        },
      }}
      >
        <Tab.Screen name="Home" component={Home} options={{title:'Home'}}/>
        <Tab.Screen name="Scanner" component={QRScanner} options={{title:'Scan'}} />
        <Tab.Screen name="Cart" component={Cart} options={{title:'Cart'}} />
      </Tab.Navigator>
    );
  }

const Tab= createBottomTabNavigator();

