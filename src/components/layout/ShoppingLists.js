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
import Search from '../common/HomeComp/SearchBar';
import ListTab from '../common/ShoppingListComp/ListTab';

export default class ShoppingLists extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Head title="Shopping List" />
                <View style={{ top: '8%' }}>
                    <Search placeholder="Enter list name" />
                    <ListTab
                        startcolor='#667eea'
                        endcolor='#65b6ff'
                        date="08"
                        month="DEC"
                        items="03"
                        listname="Weekend List"
                        people="Robert Daniel, Julie Turner" />
                    <ListTab
                        startcolor='#1fc5bc'
                        endcolor='#09d9b7'
                        date="20"
                        month="DEC"
                        items="20"
                        listname="Birthday Party"
                        people="James Watt"/>
                </View>
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
