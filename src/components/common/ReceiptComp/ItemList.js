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
import Icon from 'react-native-vector-icons/AntDesign';
import ItemDetails from '../CheckoutComp/ItemDetails';

export default function ItemList () {
    return (
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
    );
}