import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OrderCard from '../common/OrderCard';

export default class MyOrders extends Component {
    constructor({navigaton}){
        super({navigation})
    }
    render() {
        return(
            <View>
                <Text style={{ fontSize: 24, marginLeft: wp('3%'), marginVertical: hp('2%') }}>My Orders</Text>
                <ScrollView contentContainerStyle={{paddingBottom: hp('10%')}}>
                    <OrderCard date="10-Apr-2020" shop_name="Big Bazaar" total="34.00" />
                    <OrderCard date="12-Mar-2020" shop_name="SRS" total="1034.00" />
                </ScrollView>
            </View>
        );
    }
}