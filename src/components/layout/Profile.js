import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../common/Header';
import { InputField } from '../common/ProfileComp/InputField';
import ContinueButton from '../common/QRScannerComp/ContinueButton';
import LinearGradient from 'react-native-linear-gradient';

export default class Profile extends Component {
    render() {
        return (
            <View>
                <Header header="Profile" />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});