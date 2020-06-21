import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListHead from '../common/SampleListComp/ListHead';
import Name from '../common/SampleListComp/Name';
import ItemHead from '../common/SampleListComp/Itemhead';
import ItemTab from '../common/SampleListComp/ItemTab';
import LinearGradient from 'react-native-linear-gradient';

export default class SampleList extends Component {
    render() {
        return (
            <LinearGradient
                colors={[this.props.startcolor, this.props.endcolor]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={styles.container}>
                <ListHead placeholder="Enter item name" listname="Weekend List" />
                <View style={{
                    flex: 1,
                    top: '4%',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30

                }}>
                    <View style={{
                        marginTop: '5%',
                        marginHorizontal: '6%',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Name person="Julie Turner" />
                            <Name person="Robert Danial" />
                            <Name person="Julie Turner" />
                            <Name person="Robert Danial" />
                        </ScrollView>
                        <TouchableOpacity>
                            <Icon
                                name='person-add'
                                size={25}
                                color='#50e3c2' />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <ItemHead itemtype="Fruits" quantity="03" />
                        <ItemTab
                            image={require("../../assets/Image_9.webp")}
                            itemname="Banana"
                            itemprice="$7/kg"
                            itemweight="500"
                            badge={1}
                            discount="10%" />
                        <ItemTab
                            image={require("../../assets/Image_9.webp")}
                            itemname="Banana"
                            itemprice="$7/kg"
                            itemweight="500" />
                        <ItemHead itemtype="Fruits" quantity="03" />
                        <ItemTab
                            image={require("../../assets/Image_9.webp")}
                            itemname="Banana"
                            itemprice="$7/kg"
                            itemweight="500"
                            badge={1}
                            discount="10%" />
                        <ItemTab
                            image={require("../../assets/Image_9.webp")}
                            itemname="Banana"
                            itemprice="$7/kg"
                            itemweight="500" />
                        <Text>{" "}</Text>
                        <Text>{" "}</Text>
                        <Text>{" "}</Text>
                    </ScrollView>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});
