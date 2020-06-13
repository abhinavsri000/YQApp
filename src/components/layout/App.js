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

const App: () => React$Node = () => {
  return <Checkout />;
};

export default App;
