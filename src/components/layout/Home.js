import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import Search from '../common/HomeComp/SearchBar'
import Title from '../common/HomeComp/Title'
import TrendingOffers from '../common/HomeComp/TrendingOffers'
import ShoppingList from '../common/HomeComp/ShoppingList'
import BottomNavigation from '../common/HomeComp/BottomNavigation';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Search placeholder="Search Stores"/>
                <ScrollView>
                    {/* <Title TitleText="Trending Offers" TitleTextLink="See all" /> */}
                    {/* <TrendingOffers /> */}
                    {/* <Title TitleText="Shopping List" TitleTextLink="+Add List" /> */}
                    <ShoppingList title="Trending Offers" option="See all(45)" imageUrl={require('../../assets/Image_1.png')} />
                    <ShoppingList title="Shopping List" option="+Add List" imageUrl={require('../../assets/Image_3.png')} />
                    <ShoppingList title="Category" option="Show more" imageUrl={require('../../assets/Image_3.png')} />
                    {/* <Title TitleText="Category" TitleTextLink="Show more" /> */}
                </ScrollView>
                <BottomNavigation option3="Orders" icon3="chart-line" icon="qrcode-scan" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
