import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import CustomButton from '../common/LoginAccessComp/Button';
import Tab from '../common/LoginAccessComp/Tab';
import Head from '../common/LoginAccessComp/Head';

class Login_Access_Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Head title='YQ' />
                <View style={styles.headcontainer}>
                    <Text style={styles.headtext}>
                        Login to access your profile
                    </Text>
                    <CustomButton title="Already a member? Login" length={wp('84%')} />
                    <CustomButton title="Create a New Account" length={wp('84%')} buttoncolor="#ffffff" titlecolor="#000000" />
                </View>
                <View style={styles.tabcontainer}>
                    <Tab heading="24X7 Support" subtext="Raise a query, view progress" />
                    <Tab heading="Language Settings" subtext="We are available in your preferred language" />
                </View>
                <Text style={{
                    position: 'absolute',
                    bottom: '5%',
                    fontSize: 16
                }}>
                    V 1.0.0
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headcontainer: {
        width: '80%',
        position: 'relative',
        top: '-7%',
        marginBottom: '10%'
    },

    headtext: {
        fontSize: 22,
        alignSelf: 'baseline',
        color: '#5663ff',
        marginBottom: '10%'
    },

    tabcontainer: {
        position: 'relative',
        top: '-10%',
    }
});

export default Login_Access_Screen;
