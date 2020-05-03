import React from 'react';
import { View, Text} from 'react-native';

import { LoginGoogle } from '.';

const RegisterCard = ({sampleText, bottomText }) => {

  const { containerStyle, headText } = styles;

  return (

    <View style = {containerStyle}>
      <Text style = {headText}> {sampleText} </Text>
      <LoginGoogle buttonText = 'Login with' backgroundStyle = '#FFFFFF'
        iconName="google" iconColor="#000" textColor="#000000" iconSize = {18}/>
      <LoginGoogle
        buttonText = 'Login with'
        textColor='#FFFFFF'
        backgroundStyle = '#475993' iconName="facebook-square" iconColor="#FFF" iconSize = {19}/>
        <Text style = {[headText, {margin: 20}]}> {bottomText} </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 45,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headText: {
    fontFamily: 'SF Pro Display Regular',
    fontSize: 13,
    color: '#8B959A',
  }
}

export {RegisterCard};
