/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import HomeView from './components/HomeView';

export default class App extends React.Component {
  render() {
      return (
          <View style={styles.container}>
              <HomeView />
          </View>
      );
  }
}const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

export default App;
