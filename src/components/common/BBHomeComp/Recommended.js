import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import { Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProductImage from './ProductImage';

export default class Recommended extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                        <Text style={styles.title}>Recommended</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.option}>See all</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        width: wp('90%')
    },

    title: {
        marginLeft: '5%',
        fontWeight: "bold",
        fontSize: 22
    },

    option: {
        color: '#bdbdbd',
        fontWeight: "bold",
        fontSize: 18,
        marginRight: '5%'
    }
});
