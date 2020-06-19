import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OTPInput from "../common/OTPInput";
import { Card } from "react-native-elements";

export default class OTP extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24, marginVertical: hp('1.5%')}}>Just One Step Away</Text>
                <Text style={{ fontSize: 16, width: wp('50%'), textAlign: "center", color: '#666' }}>OTP has been sent to your mobile number</Text>
                <Card containerStyle={styles.myCard}>
                    <Text style={{ fontSize: 16, color:'#666' }}>Enter otp</Text>
                    <OTPInput />
                </Card>
                <TouchableOpacity>
                    <Text style={{ fontSize: 16, color: '#1e88e5'}}>Resend OTP</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 16}}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, color: '#1e88e5' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }       
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    myCard: {
        marginTop: hp('18%'),
        marginBottom: hp('31%'),
        paddingHorizontal: wp('8%'),
        width: wp('85%'),
        height: hp('22%'),
        borderRadius: 20,
        elevation: 3,
        alignItems:"center",
        justifyContent:"center"
    },
    
});