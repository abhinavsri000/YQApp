import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import { Card } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;

export default class ShoppingList extends Component {
    render() {
        return (
            <View style={{marginBottom: 5}}>
                <View style={{flex:1, flexDirection: "row", alignItems:"center"}}>
                    <View style={{ flex: 1, alignItems:"flex-start" }}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text style={styles.option}>{this.props.option}</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={{}}>
                    <Card containerStyle={{ padding: 0, borderRadius: 10, paddingRight: 0 }}>
                        <Image
                            source={this.props.imageUrl}
                            style={styles.image} />
                    </Card>
                    <Card containerStyle={{ padding: 0, borderRadius: 10 }}>
                        <Image
                            source={require('../../../assets/Image_3.png')}
                            style={styles.image} />
                    </Card>
                    <Card containerStyle={{ padding: 0, borderRadius: 10 }}>
                        <Image
                            source={require('../../../assets/Image_3.png')}
                            style={styles.image} />
                    </Card>
                    {/* <View style={styles.container} >
                    <Image
                        source={require('../../../assets/Image_3.png')}
                        style={styles.image} />
                </View>
                <View style={styles.container} >
                    <Image
                        source={require('../../../assets/Image_3.png')}
                        style={styles.image} />
                </View>
                <View style={styles.container} >
                    <Image
                        source={require('../../../assets/Image_3.png')}
                        style={styles.image} />
                </View>
                <View style={styles.container} >
                    <Image
                        source={require('../../../assets/Image_3.png')}
                        style={styles.image} />
                </View> */}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20, 
    },

    image: {
        width: width * 0.9,
        height: 200,
        borderRadius: 10
    },
    title: {
        marginLeft: wp('5%'),
        fontWeight: "bold",
        fontSize: 22
    },
    option: {
        color: '#bdbdbd',
        fontWeight: "bold",
        fontSize: 18,
        marginRight: wp('5%')
    }
});
