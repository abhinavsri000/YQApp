import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class CustomButton extends Component<{}> {

    render() {
        return (
            <Button
                raised
                title={this.props.title}
                titleStyle={{
                    fontSize: 18,
                    color: this.props.titlecolor || '#ffffff'
                }}
                containerStyle={{
                    alignSelf: 'center',
                    marginVertical: '2%',
                    width: this.props.length || wp('80%'),
                }}
                buttonStyle={{
                    height: this.props.size || 50,
                    backgroundColor: this.props.buttoncolor || '#5663ff',
                    borderRadius: 25
                }}
                onPress={() => this.props.onPress } />
        );
    }
}