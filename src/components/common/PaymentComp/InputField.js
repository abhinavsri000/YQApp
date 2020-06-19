import React from 'react';
import { View, TextInput, StyleSheet, Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InputField = ({width,label, holder, secureEnable}) => {
    return(
        <View>
            <Text style={{marginLeft: 2}}>{label}</Text>
            <View style={{ alignItems: "center" }}>
                <TextInput style={[styles.inputStyle, {width: width}]}
                    placeholder={holder}
                    secureTextEntry={secureEnable}
                    placeholderTextColor='#979797'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        height: hp('5%'),
        borderWidth: 1,
        fontSize: 18,
        margin: 5,
        // marginLeft: 10,
        // paddingLeft: 14,
        // paddingRight: 10,
        // marginRight: 10,
        borderRadius: 5,
        borderColor: '#000',
    },
});

export {InputField};