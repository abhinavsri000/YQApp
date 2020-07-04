import React, { Component, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Modal
} from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Stepper from '../common/CartComp/Stepper';
import { Divider, Overlay } from 'react-native-elements';
import CustomButton from '../common/LoginAccessComp/Button';

export default function AddProduct({ productName, company, price, discount }) {
    const [modalVisible, setModalVisible] = useState(true);
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        //<View style={styles.container} >
            //<CustomButton length={wp('70%')} title="Modal ON" titlesize={16} buttoncolor="#3c82ff" onPress={toggleModal} />
        <Modal
            animationType='slide'
            visible={modalVisible}
            transparent={true}>
            <View style={{
                marginTop: '50%',
                marginBottom: '2%',
                backgroundColor: '#ffffff',
                height: '1%',
                width: '15%',
                borderRadius: 30,
                elevation: 5,
                alignSelf: 'center'
            }} />
            <View style={{
                flex: 1,
                backgroundColor: '#ffffff',
                width: '90%',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                elevation: 5,
                alignSelf: 'center'
            }}>
                <View style={{
                    padding: '8%',
                    flexDirection: 'row'
                }}>
                    <Image
                        source={require("../../assets/Image_10.jpg")}
                        style={{
                            height: 80,
                            width: 80,
                            marginRight: 10,
                            flex: 1
                        }}
                        resizeMode='stretch' />
                    <View style={styles.Content}>
                        <Text style={styles.cardTitle}>{productName}</Text>
                        <Text style={styles.cardTitle}>{company}</Text>
                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                            <Text style={styles.price}>₹ {price}</Text>
                            <Text style={styles.discount}>{discount}</Text>
                        </View>
                    </View>
                </View>
                <Divider style={{
                    height: 1,
                    marginBottom: '2%'
                }} />
                <View>
                    <Text style={{
                        alignSelf: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginBottom: '3%'
                    }}>
                        SIZE
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <CustomButton length={80} title="UK9" titlesize={16} buttoncolor="#3c82ff" size={40} />
                        <CustomButton length={80} title="UK9" titlesize={16} buttoncolor="#3c82ff" size={40} />
                    </View>
                    <Text style={{
                        alignSelf: "center",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: '5%',
                        marginBottom: '5%'
                    }}>
                        SELECT QTY
                    </Text>
                    <Stepper />
                    <CustomButton length={wp('70%')} title="ADD TO CART" titlesize={16} buttoncolor="#3c82ff" />
                    {/*<CustomButton length={wp('70%')} title="Modal OFF" titlesize={16} buttoncolor="#3c82ff" onPress={toggleModal} />*/}
                </View>
            </View>
        </Modal>
        //</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red'
    },

    Content: {
        flex: 2,
        width: wp('50%'),
        marginHorizontal: wp('5%'),
    },

    cardTitle: {
        fontSize: 14,
        color: 'grey',
        marginBottom: '2%'
    },

    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: '1%'
    },

    discount: {
        color: 'green',
        fontSize: 12,
        marginLeft: '10%'
    },
});
