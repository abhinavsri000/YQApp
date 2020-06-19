import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './Login';
import Signup from './Signup';
import Checkout from './Checkout';
import Cart from './Cart';
import BarcodeScanner from './BarcodeScanner';
import QRScanner from './QRScanner';
import Payment from './Payment';
import Profile from './Profile';
import OTP from './OTP';
import Receipt from './Receipt';
import MyOrders from './MyOrders';

const App: () => React$Node = () => {
  return <MyOrders />;
};

export default App;
