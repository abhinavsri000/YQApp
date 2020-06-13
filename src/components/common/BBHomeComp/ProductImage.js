import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ProductImage extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                marginBottom: '5%'
            }}>
                <View style={{
                    height: hp('25%'),
                    width: wp('40%'),
                    borderRadius: 10,
                    marginLeft: '5%',
                    marginRight: '2.5%'
                }}>
                    <Image
                        source={ this.props.image_1 }
                        style={styles.image} />
                </View>
                <View style={{
                    height: hp('25%'),
                    width: wp('40%'),
                    borderRadius: 10,
                    marginLeft: '2.5%',
                    marginRight: '5%'
                }}>
                    <Image
                        source={ this.props.image_2 }
                        style={styles.image} />
                    <View style={styles.badge} >
                        <Text style={styles.BadgeText}>
                            New
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: wp('40%'),
        height: hp('25%'),
        borderRadius: 10,
        resizeMode: 'stretch'
    },

    badge: {
        position: 'absolute',
        top: '6%',
        right: '6%',
        borderRadius: 5,
        height: hp('4.5%'),
        width: wp('14%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e80057'
    },

    BadgeText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    }
});
