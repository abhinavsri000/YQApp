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
<<<<<<< HEAD
import MyOrders from './MyOrders';
import CreateList from './CreateList';
import Profile from './Profile';

const App: () => React$Node = () => {
  return <Profile />;
=======
import BBHome from './BBHome';
import ShoppingLists from './ShoppingLists';
import SampleList from './SampleList';
import AddProduct from './AddProduct';

const App: () => React$Node = () => {
    //return <AddProduct productName="Kedo Running Shoes" company="from Adidas" price="7000" discount="30% off" />;
    return <SampleList startcolor='#667eea' endcolor='#65b6ff' />
>>>>>>> 4f0eefb9a3e506b1dbe061d776bfe14883c00206
};

export default App;
