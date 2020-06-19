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
import CartCard from '../common/CartComp/CartCard';
import Icon from 'react-native-vector-icons/AntDesign';
import ItemDetails from '../common/CheckoutComp/ItemDetails';

export default class Receipt extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: hp('10%') }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.Box}>
                        <View style={styles.Circle}>
                            <Text style={styles.YQ}>YQ</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 8, alignItems: "center", height: hp('13%') }}>
                        <Text style={{ color: '#4F3961', fontSize: 20, fontWeight: "bold" }}>Receipt</Text>
                        <Divider style={{ width: wp('49%'), marginBottom: 4 }} />
                        <Text style={{ color: '#f50057', fontSize: 16 }}>18 June 2020</Text>
                        <Text style={{ color: '#f50057', fontSize: 16 }}>06:57 PM</Text>
                    </View>
                </View>
                <View style={{ padding: 20 }}>
                    <Text>Hi Ujjwal{'\n'}</Text>
                    <Text>Thanks for buying our product. This is your receipt information.</Text>
                </View>
                <Card containerStyle={{ paddingHorizontal: wp('1%') }}>
                    <ItemDetails title_left="Item" title_right='Price' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                    <ItemDetails subTitle_left="Smart Home Speaker" subTitle_right='₹ 3500' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                    <ItemDetails subTitle_left="Smart Home Speaker" subTitle_right='₹ 3500' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                    <ItemDetails subTitle_left="Smart Home Speaker" subTitle_right='₹ 3500' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                    <ItemDetails subTitle_left="Smart Home Speaker" subTitle_right='₹ 3500' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                    <ItemDetails subTitle_left="Smart Home Speaker" subTitle_right='₹ 3500' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                    <ItemDetails subTitle_left="Smart Home Speaker" subTitle_right='₹ 3500' />
                    <ItemDetails subTitle_left="Kedo Running Shoes" subTitle_right='₹ 7000' />
                </Card>
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
                            source={require('../../assets/qrcode.png')}
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
                        <Text style={{ fontSize: 22, fontWeight: "bold" }}>₹ 17,500</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon
                        name="close"
                        size={30}
                        style={{ alignSelf: "center" }}
                    />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
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