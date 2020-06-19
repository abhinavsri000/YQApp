import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Header extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: wp('3%'), marginVertical: hp('2%') }}>
                <TouchableOpacity>
                    <Icon
                        name="arrowleft"
                        color="#000"
                        size={33}
                    />
                </TouchableOpacity>
                <Text style={styles.Header} >{this.props.header}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        marginHorizontal: wp('4%'),
        fontSize: 28
    }
});