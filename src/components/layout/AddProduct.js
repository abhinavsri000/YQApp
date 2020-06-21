import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import ListHead from '../common/SampleListComp/ListHead';
import Name from '../common/SampleListComp/Name';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import ItemHead from '../common/SampleListComp/Itemhead';
import ItemTab from '../common/SampleListComp/ItemTab';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Stepper from '../common/CartComp/Stepper';
import { Divider } from 'react-native-elements';
import CustomButton from '../common/LoginAccessComp/Button';

export default class AddProduct extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={{
                    marginTop: '50%',
                    marginBottom: '2%',
                    backgroundColor: '#ffffff',
                    height: '1%',
                    width: '15%',
                    borderRadius: 30,
                    elevation: 5
                }}>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    width: '90%',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    elevation: 5
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
                            <Text style={styles.cardTitle}>{this.props.productName}</Text>
                            <Text style={styles.cardTitle}>{this.props.company}</Text>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={styles.price}>₹ {this.props.price}</Text>
                                <Text style={styles.discount}>{this.props.discount}</Text>
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
                    </View>
                </View>
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
    }
});
