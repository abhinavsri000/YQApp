import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import UIStepper from 'react-native-ui-stepper';

export default function Stepper () {
    return(
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <View style={[styles.circle, { translateX: -31 }]} />
            <View style={[styles.circle, { translateX: 31 }]} />
            <UIStepper displayValue borderColor='transparent' textColor='#000' fontSize={20} />
        </View>
    );
}

const styles=StyleSheet.create({
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFF',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        position: "absolute"
    }
});