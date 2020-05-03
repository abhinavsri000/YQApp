import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RegisterHeader = ({headerTitle, headerText}) => {
  const {viewStyle, titleStyle, textStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={titleStyle}>{headerTitle}</Text>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 50,
  },
  titleStyle: {
    fontFamily: 'seguisb',
    fontSize: 22,
  },
  textStyle:{
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    paddingTop: 6,
    color: '#8B959A'
  },
});

export {RegisterHeader};
