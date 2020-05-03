import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputField = ({hintText, secureEnable, mar}) => {

  const {inputStyle} = styles;

  return(
    <TextInput style={[inputStyle, {marginTop: mar}]}
      placeholder = {hintText}
      placeholderTextColor = '#979797'
      secureTextEntry = {secureEnable}
      autoCorrect = {false}
      >
    </TextInput>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1.5,
    height: 45,
    fontSize: 18,
    width: 320,
    marginLeft: 10,
    paddingLeft: 14,
    paddingRight: 10,
    marginRight: 10,
    borderRadius: 10,
    fontFamily: 'Roboto Regular',
    borderColor: '#E2E6EA',

  }
});

export { InputField };
