import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../../components/layout/Home';
import BBHome from '../../components/layout/BBHome';
import QRScanner from '../../components/layout/QRScanner';
import Cart from '../../components/layout/Cart';
import Checkout from '../../components/layout/Checkout';
import Payment from '../../components/layout/Payment';
import Confirmation from '../../components/layout/Confirmation';
import Receipt from '../../components/layout/Receipt';
import {Tabs} from '../navigators/BottomTabNavigator';
const HomeStack = createStackNavigator();
export function StackNav () {
    return(
    <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Tabs" >
        <HomeStack.Screen name="Tabs" component={Tabs} />
        <HomeStack.Screen name="BBHome" component={BBHome} />
        <HomeStack.Screen name="Cart" component={Cart} />
        <HomeStack.Screen name="Checkout" component={Checkout} />
        <HomeStack.Screen name="Payment" component={Payment} />
        <HomeStack.Screen name="Confirmation" component={Confirmation} />
        <HomeStack.Screen name="Receipt" component={Receipt} />
    </HomeStack.Navigator>
    );
}