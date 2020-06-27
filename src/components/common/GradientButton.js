import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

class GradientButton extends Component {
    render() {
        const { navigation } = this.props;
        return <Button
            raised
            ViewComponent={LinearGradient}
            linearGradientProps={{
                colors: [this.props.startcolor, this.props.endcolor],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
            title={this.props.title}
            titleStyle={{
                fontSize: 18
            }}
            buttonStyle={{
                height: this.props.height,
                justifyContent: 'space-evenly'
            }}
            containerStyle={{
                width: this.props.length || '75%',
                marginVertical: '1%'
            }}
            onPress={() => navigation.navigate(this.props.screenName)}
        />
    }
}

export default function ({ startcolor, endcolor, title, screenName }) {
    const navigation = useNavigation();

    return <GradientButton startcolor={startcolor} endcolor={endcolor} title={title} screenName={screenName} navigation={navigation} />;
}