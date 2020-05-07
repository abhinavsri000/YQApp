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

const App: () => React$Node = () => {
  return <Signup />;
};

export default App;
