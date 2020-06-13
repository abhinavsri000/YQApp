import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Image } from 'react-native-elements';
import Stepper from './Stepper';

export default class Cart extends Component {
    render() {
        return (
            <Card containerStyle={styles.myCard}>
                <View style={[{ flexDirection: "row" }, { alignItems: "center" }]}>
                    <Image
                        
                        style={styles.image}
                    />
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.Content}>
                            <Text style={styles.cardTitle}>{this.props.productName}</Text>
                            <Text style={styles.cardTitle}>{this.props.company}</Text>
                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                <Text style={styles.price}>₹ {this.props.price}</Text>
                                <Text style={styles.discount}>{this.props.discount}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", marginRight: wp('2%') }} >
                            <Text style={{ flex: 1, fontSize: 12, textAlign: "center", alignItems: "flex-start", color: 'grey' }}>Q T Y</Text>
                            <View style={{ flex: 1, alignItems: "flex-end" }}>
                                <Stepper />
                            </View>
                        </View>
                    </View>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    myCard: {
        // height: hp('15%'),
        paddingVertical: hp('2%'),
        marginVertical: 0,
        marginBottom: -2,
        marginHorizontal: 0,
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: '#e0e0e0',
        backgroundColor: '#fafafa'
    },
    Content: {
        flex: 2,
        width: wp('50%'),
        marginHorizontal: wp('5%'),
    },
    cardTitle: {
        fontSize: 13,
        color: 'grey',
        marginBottom: hp('0.5%')
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: hp('0.5%')
    },
    discount: {
        color: 'green',
        fontSize: 12,
        marginLeft: wp('2%')
    },
    image: {
        height: wp('15%'),
        width: wp('15%'),
        paddingVertical: 0
    }
});