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

export default function ReceiptFooter({ total_amount }) {
    return (
        <View>
            <View style={{ flexDirection: "row", marginHorizontal: wp('5%'), marginTop: hp('4%') }}>
                <View style={{ flex: 1.5 }}>
                    <Text style={{ color: '#bdbdbd', fontSize: 16 }}>Customer Support Info</Text>
                    <Text style={{ color: '#f50057', fontSize: 16 }}>YQ Pvt. Ltd.</Text>
                    <Text style={{ color: '#666', fontSize: 16 }}>Noida, India{'\n'}</Text>
                    <Text style={{ color: '#666', fontSize: 16 }}>Phone +62 827 3874 3242</Text>
                    <Text style={{ color: '#666', fontSize: 16 }}>Email test.1@gmail.com</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={require('../../../assets/qrcode.png')}
                        style={{ height: hp('17%'), width: hp('17%') }}
                    />
                </View>
            </View>
            <Divider style={{ alignSelf: "center", width: wp('90%'), height: hp('0.4%'), marginVertical: hp('2%') }} />
            <View style={{ flexDirection: "row", marginHorizontal: wp('5%') }}>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 22, color: '#f50057', fontWeight: "bold" }}>TOTAL</Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>₹ {total_amount}</Text>
                </View>
            </View>
        </View>
    );
}