import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Image, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Coupon extends Component {
    render() {
        return(
            <View style={{ flexDirection: "row", padding: wp('5%')}}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Coupon Code"
                    placeholderTextColor="#bdbdbd"
                
                />
                <Button
                    type="solid"
                    title="Apply Coupon"
                    titleStyle={{fontSize: 12, marginRight:5}}
                    containerStyle={{flex:1, marginLeft: -wp('1%')}}
                    buttonStyle={{ backgroundColor: 'green', height: hp('6%')}}
                    iconRight
                    icon={
                        <Icon
                            name="ios-arrow-round-forward"
                            color="#FFF"
                            size={25}
                        />
                    }
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    inputStyle: {
        flex: 1.2,
        height: hp('6%'),
        borderWidth: 1,
        borderColor: 'green',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingLeft: wp('4%')
        // marginH: wp('10%')
    }
});