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
import EditProfile from './EditProfile';
import OTP from './OTP';
import Receipt from './Receipt';
import MyOrders from './MyOrders';
import CreateList from './CreateList';
import Profile from './Profile';

const App: () => React$Node = () => {
  return <Profile />;
};

export default App;
