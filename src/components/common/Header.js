import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

class Header extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: wp('3%'), marginVertical: hp('2%') }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
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
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default function ({ header }) {
    const navigation = useNavigation();

    return <Header header={header} navigation={navigation} />;
}