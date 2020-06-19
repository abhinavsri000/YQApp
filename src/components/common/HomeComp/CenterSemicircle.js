import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FloatButton from '../ShoppingListComp/FloatButton';

export default class CenterSemicircle extends Component {
    render() {
        return (
            <View style={{
                position: 'absolute',
                top: '-85%',
                left: '37.5%',
                height: '130%',
                width: '25%',
                borderColor: '#ffffff',
                borderRadius: 200,
                borderRightWidth: 8,
                elevation: 100,
                transform: [
                    { rotate: '90deg' }
                ]
            }}>
            </View>
        );
    }
}