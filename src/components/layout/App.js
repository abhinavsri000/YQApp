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
import BBHome from './BBHome';
import ShoppingLists from './ShoppingLists';
import SampleList from './SampleList';
import AddProduct from './AddProduct';

const App: () => React$Node = () => {
    //return <AddProduct productName="Kedo Running Shoes" company="from Adidas" price="7000" discount="30% off" />;
    return <SampleList startcolor='#667eea' endcolor='#65b6ff' />
};

export default App;
