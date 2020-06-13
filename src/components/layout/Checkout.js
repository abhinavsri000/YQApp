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
import ItemDetails from '../common/CheckoutComp/ItemDetails';

export default class Checkout extends Component {
    render() {
        return (    
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Checkout</Text>
                
                <ScrollView contentContainerStyle={{ paddingBottom: hp('10%') }}>
                    <Card containerStyle={{paddingHorizontal: wp('1%')}}>
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
                    {/* <CartCard productName="Kedo Running Shoes" company="from Adidas" price="7000" discount="30% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" /> */}
                    <Text style={{ margin: wp('5%'), fontSize: 18 }}>Cart Totals</Text>
                    <Card>
                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 16 }}>Subtotal -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16 }}>₹ 22,050</Text>
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
                                    <Text style={{ fontSize: 16, color: 'green' }}>-  ₹ 4,550</Text>
                                </View>
                            </View>
                        </View>
                        <Divider style={{ backgroundColor: '#000', height: 1 }} />

                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 16 }}>Total -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>₹ 17,500</Text>
                                </View>
                            </View>
                        </View>

                    </Card>
                    <Coupon />
                    <Card>
                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 16 }}>Coupon Discount -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16, color: 'green' }}>- ₹ 500</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", marginVertical: hp('2%') }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{ alignItems: "center" }}>
                                    <Text style={{ fontSize: 16 }}>Amount Payable -</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }} >
                                <View style={{ alignItems: "center" }} >
                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: 'blue' }}>₹ 17,000</Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </ScrollView>
                
                {/* <View style={{flex:1.7}}>
                    
                </View> */}
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