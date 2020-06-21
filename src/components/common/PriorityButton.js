import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class PriorityButton extends Component {
    render() {
        return(
            <View style={{ alignItems: "center" }}>
                <Button
                    raised
                    ViewComponent={LinearGradient}
                    linearGradientProps={{
                        colors: [this.props.startcolor, this.props.endcolor],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                    }}
                    icon={
                        <Icon
                            name={this.props.icon}
                            size={wp('10%')}
                            color='#ffffff'
                        />
                    }
                    buttonStyle={{
                        height: this.props.height,
                        justifyContent: 'space-evenly'
                    }}
                    containerStyle={{
                        width: this.props.height,
                        borderRadius: this.props.height/2,
                        marginVertical: '1%',
                        elevation: 10
                    }}
                />
                <Text style={{marginTop: hp('0.5%')}}>{this.props.priority}</Text>
            </View>
        );
    }
}