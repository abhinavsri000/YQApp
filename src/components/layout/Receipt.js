import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image } from 'react-native-elements';
import CartCard from '../common/CartComp/CartCard';
import Icon from 'react-native-vector-icons/AntDesign';
import ItemDetails from '../common/CheckoutComp/ItemDetails';
import ReceiptHeader from '../common/ReceiptComp/ReceiptHeader';
import TitleText from '../common/ReceiptComp/TitleText';
import ItemList from '../common/ReceiptComp/ItemList';
import ReceiptFooter from '../common/ReceiptComp/ReceiptFooter';
import CloseButton from '../common/ReceiptComp/CloseButton';

export default class Receipt extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: hp('10%') }}>
                <ReceiptHeader date="18 June 2020" time="06:57 PM" />
                <TitleText userName="Ujjwal" />
                <ItemList/>
                <ReceiptFooter total_amount="17,500" />
                <CloseButton screenName="BBHome" />
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({

});