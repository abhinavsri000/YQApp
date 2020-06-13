import React, { Component } from 'react';
import {
    View,
    StyleSheet,    Text,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Search from '../common/HomeComp/SearchBar';
import Carousel from '../common/BBHomeComp/Carousel';
import Categories from '../common/BBHomeComp/Categories';
import Title from '../common/HomeComp/Title';
import ProductImage from '../common/BBHomeComp/ProductImage';
import BottomNavigation from '../common/HomeComp/BottomNavigation';

export default class BBHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Search placeholder="Search Your Product" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Carousel title="Deal of the Day" option="See all" />
                    <Categories/>
                    <Title title="Recommended" option="See all" />
                    <View style={{
                        flexDirection: 'column',
                        marginTop: '2%',
                        width: wp('90%')
                    }}>
                        <ProductImage
                            image_1={require("../../assets/Image_5.jpg")}
                            image_2={require("../../assets/Image_5.jpg")} />
                        <ProductImage
                            image_1={require("../../assets/Image_5.jpg")}
                            image_2={require("../../assets/Image_5.jpg")} />
                        <Text>{" "}</Text>
                        <Text>{" "}</Text>
                        <Text>{" "}</Text>
                    </View>
                </ScrollView>
                <BottomNavigation option3="Cart" icon3="cart-outline" icon="qrcode-scan" />
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
