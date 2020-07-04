import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Divider } from 'react-native-elements';

export default function ReceiptHeader ({ date, time }) {
    return(
        <View style={{ flexDirection: "row" }}>
            <View style={styles.Box}>
                <View style={styles.Circle}>
                    <Text style={styles.YQ}>YQ</Text>
                </View>
            </View>
            <View style={{ flex: 1, padding: 8, alignItems: "center", height: hp('13%') }}>
                <Text style={{ color: '#4F3961', fontSize: 20, fontWeight: "bold" }}>Receipt</Text>
                <Divider style={{ width: wp('49%'), marginBottom: 4 }} />
                <Text style={{ color: '#f50057', fontSize: 16 }}>{date}</Text>
                <Text style={{ color: '#f50057', fontSize: 16 }}>{time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Box: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#4F3961',
        height: hp('13%')
    },
    Circle: {
        height: hp('8%'),
        width: hp('8%'),
        borderRadius: hp('4%'),
        backgroundColor: '#f50057',
        justifyContent: "center",
        alignItems: "flex-end",

    },
    YQ: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: "bold",
        marginRight: -wp('4%')
    }
});