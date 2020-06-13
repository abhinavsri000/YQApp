import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Title from '../HomeComp/Title';
import NewCategory from './NewCategory';

export default class Categories extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Title title="Categories"/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <NewCategory name="Men" icon_name="shoe-formal" />
                        <NewCategory name="Women" icon_name="shoe-heel" />
                        <NewCategory name="Devices" icon_name="lightbulb-on-outline" />
                        <NewCategory name="Gadgets" icon_name="headset" />
                        <NewCategory name="Gaming" icon_name="gamepad-variant" />
                        <NewCategory name="Gaming" icon_name="gamepad-variant" />
                        <NewCategory name="Gaming" icon_name="gamepad-variant" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: wp('90%')
    },

    title: {
        marginLeft: '5%',
        fontWeight: "bold",
        fontSize: 22
    }
});
