import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import UpiButton from '../common/PaymentComp/UpiButton';
import SaveInfo from '../common/PaymentComp/SaveInfo';
import { InputField } from '../common/PaymentComp/InputField';
import ContinueButton from '../common/QRScannerComp/ContinueButton';
import Header from '../common/Header';

export default class Payment extends Component {
    render() {
        return(
            <View style={{flex:1, alignItems:"center" }}>
                <View style={{backgroundColor: '#eeeeee', height: '15%', width: '100%', justifyContent:"center"}}>
                    {/* <Text style={{fontWeight:"bold", marginLeft: wp('5%'), fontSize: 22}}>Payment</Text> */}
                    <Header header="Payment" />
                </View>
                <View style={{margin:0}}>
                    <Text style={styles.titles}>Payment Methods</Text>
                    <Button
                        title="Pay With Visa or Mastercard"
                        titleStyle={{ marginLeft: wp('4%') }}
                        type="solid"
                        buttonStyle={{ backgroundColor: '#1e88e5', height: hp('8%'), marginHorizontal: wp('5%'), borderRadius: 5 }}
                        icon={<Icon
                            name="creditcard"
                            size={30}
                            color="white"
                        />}
                    />
                    <Text style={[styles.titles, { textAlign: "center" }]}>Choose another payment type</Text>
                    <View style={{ flexDirection: "row", marginHorizontal: wp('6%'), marginBottom: hp('2%') }}>
                        <View style={{ flex: 1, marginRight: wp('1.5%') }}>
                            <UpiButton title="Pay" image_url={require('../../assets/Paypal.png')} />
                        </View>
                        <View style={{ flex: 1, marginHorizontal: wp('1.5%') }}>
                            <UpiButton title="Pay" image_url={require('../../assets/amazon.png')} />
                        </View>
                        <View style={{ flex: 1, marginLeft: wp('1.5%') }}>
                            <UpiButton title="Pay" image_url={require('../../assets/Google.png')} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: wp('5%') }}>
                        <InputField label='Card number' width={wp('90%')} />
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flex: 1, marginRight: wp('1.5%') }}>
                                <InputField label='Expiry date' width={wp('43.5%')} />
                            </View>
                            <View style={{ flex: 1, marginLeft: wp('1.5%') }}>
                                <InputField label='CVV' width={wp('43.5%')} />
                            </View>
                        </View>
                        <InputField label='Card holder name' width={wp('90%')} />
                        
                        <SaveInfo/>
                    </View>
                </View>
                <Divider style={{}} />
                <View style={{ flexDirection: "row", marginVertical: hp('2%'), marginHorizontal: wp('7%') }}>
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
                <ContinueButton title="PAY NOW" buttonColor='#1e88e5' width={wp('90%')} screenName="Confirmation" />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    titles: {
        marginLeft: wp('5%'),
        marginVertical: hp('2%'),
        fontSize: 17
    },
    text:
    {
        fontSize: 18,
        color: "#FFFFFF"
    },
    slider:
    {
        flex: 1,
        marginLeft: 26,
        marginRight: 26
    },
    sliderBorder:
    {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#FFFFFF"
    }
});