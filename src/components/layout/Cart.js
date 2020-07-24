import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CartCard from '../common/CartComp/CartCard';
import SearchBar from '../common/HomeComp/SearchBar';
import ContinueButton from '../common/QRScannerComp/ContinueButton';
import HeaderCard from '../common/HeaderCard';

export default class Cart extends Component {
    render() {
        return(
            <View style={{flex:1}}>
                <HeaderCard Comp={<Text style={{fontWeight:'bold',fontSize:16}}>Cart</Text>}/>
        {/*         <SearchBar placeholder="Search cart" /> */}
                <Text style={styles.title}>Cart</Text>
                <ScrollView contentContainerStyle={{ paddingBottom: hp('20%'), marginTop: hp('2%') }}>
                    <CartCard productName="Kedo Running Shoes" company="from Adidas" price="7000" discount="30% off" />
                    <CartCard productName="Smart Home Speaker" price="3500" discount="10% off" />
                </ScrollView>
                <View style={{ justifyContent: "center", alignItems:"center"}} >
                    <ContinueButton title="CHECKOUT" buttonColor='#1565c0' width={wp('90%')} screenName="Checkout" />
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: wp('5%')
    }
});