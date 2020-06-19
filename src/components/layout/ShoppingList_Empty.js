import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

import FloatButton from '../common/ShoppingListComp/FloatButton';
import Head from '../common/LoginAccessComp/Head';

export default class ShoppingList_Empty extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Head title="Shopping List" />
                <Image
                    source={require('../../assets/Image_7.jpg')}
                    style={styles.image}
                    resizeMode='stretch'
                />
                <Text style={styles.Bottomheading}>
                    Your List is Empty
                </Text>
                <Text style={styles.Bottomtext}>
                    Create list and add them to your trolley
                </Text>
                <Text style={styles.Bottomtext}>
                    for an easier shopping experience
                </Text>
                <FloatButton icon="plus" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },

    image: {
        marginTop: '15%',
        height: '45%',
        width: '90%'
    },

    Bottomheading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#404040',
        marginVertical: '1%'
    },

    Bottomtext: {
        fontSize: 16,
        color: '#808080',
        marginBottom: 2
    }
});
