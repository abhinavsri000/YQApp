import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function OTPInput() {
    const [otp, setOtp] = useState(['.', '.', '.', '.', '.', '.']);
    const [otpVal, setOtpVal] = useState('');

    return (
        <View>
            <TextInput
                onChangeText={value => {
                    if (isNaN(value)) {
                        return;
                    }
                    if (value.length > 6) {
                        return;
                    }
                    let val =
                        value + '------'.substr(0, 6 - value.length);
                    let a = [...val];
                    setOtpVal(a);
                    setOtp(value);
                }}
                style={{ height: 0 }}
                autoFocus={true}
            />
            <View style={styles.otpBoxesContainer}>
                {[0, 1, 2, 3, 4, 5].map((item, index) => (
                    <Text style={styles.otpBox} key={index}>
                        {otp[item]}
                    </Text>
                ))}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    otpBoxesContainer: {
        flexDirection: 'row'
    },
    otpBox: {
        padding: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#bdbdbd',
        height: wp('9%'),
        width: wp('9%'),
        textAlign: 'center'
    }
});