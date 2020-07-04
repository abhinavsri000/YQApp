import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Fontisto';
import GradientButton from '../common/GradientButton';

export default class Confirmation extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.iconContainer}>
                    <Icon
                        name='like'
                        color='#91b2f1'
                        size={wp('15%')}
                        style={{
                            borderColor: 'black'
                        }} />
                </View>
                <Text style={styles.bigText}>
                    Confirmation
                </Text>
                <Text style={styles.smallText}>
                    You have successfully
                </Text>
                <Text style={[styles.smallText, { marginBottom: '7%' }]}>
                    completed your payment procedure
                </Text>
                <GradientButton
                    title="View or Download Invoice"
                    startcolor='#667eea'
                    endcolor='#65b6ff'
                    screenName="Receipt"
                />
                <GradientButton
                    title="Back to Home"
                    startcolor='#667eea'
                    endcolor='#65b6ff' />
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

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: wp('60%'),
        width: wp('60%'),
        borderRadius: wp('30%'),
        borderWidth: wp('10%'),
        backgroundColor: '#eeeeee',
        borderColor: '#f8f8f8'
    },

    bigText: {
        fontWeight: 'bold',
        color: '#404040',
        fontSize: 30,
        paddingVertical: '5%'
    },

    smallText: {
        color: '#808080'
    }
});
