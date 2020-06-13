import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';

export default class NewCategory extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                marginHorizontal: 12
            }} >
                <Button
                    raised
                    buttonStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: 50
                    }}
                    containerStyle={{ marginBottom: 10 }}
                    icon={
                        <Icon
                            name={this.props.icon_name}
                            size={40}
                            color='#193282'
                        />
                    }
                />
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}