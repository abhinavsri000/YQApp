import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CartCard from '../common/CartComp/CartCard';
import { Card, Divider } from 'react-native-elements';
import Coupon from '../common/CheckoutComp/Coupon';
import PayButton from '../common/CheckoutComp/PayButton';

export default class Checkout extends Component {
    render() {
        return (    
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Checkout</Text>
                <Card containerStyle={{ flex: 1, padding:0, marginHorizontal: 0}}>
                    <ScrollView contentContainerStyle={{ paddingBottom: hp('10%') }}>
                        <CartCard productName="Kedo Running Shoes" company="from Adidas" price="7000" discount="30% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                        <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    </ScrollView>
                </Card>
                <View style={{flex:1.7}}>
                    <Coupon />
                    <Text style={{marginLeft: wp('5%'), fontSize: 18}}>Cart Totals</Text>
                    <Card>
                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{fontSize:16}}>Subtotal -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16}}>₹ 22,050</Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{ backgroundColor: '#000', height: 1 }} />

                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 16 }}>Discount -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16, color:'green' }}>-  ₹ 4,550</Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{backgroundColor: '#000', height: 1}} />

                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 16 }}>Total -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16, fontWeight:"bold" }}>₹ 17,500</Text>
                                </View>
                            </View>
                        </View>
                        
                    </Card>
                </View>
                <PayButton total="17,500" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: wp('5%'),
        marginVertical: hp('4%')
    }
});