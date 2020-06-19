import React from 'react';
import { View, TextInput, StyleSheet, Text} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InputField = ({width,label, holder, secureEnable}) => {
    return(
        <View style={{ alignItems: "center" }}>
            <View style={{marginBottom: hp('5%')}}>
                <Text style={{ color: '#979797'}}>{label}</Text>
                <TextInput style={[styles.inputStyle, { width: width }]}
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
        height: hp('7'),
        borderBottomWidth: 1,
        fontSize: 18,
        // margin: 10,
        // borderRadius: 5,
        borderColor: '#979797',
    },
});

export {InputField};