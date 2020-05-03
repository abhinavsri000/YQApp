import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import { InputField, RadioButton } from '.';

class Form extends Component {
  render() {
  const {container} = styles;
  return (
    <View style={container} >
      <InputField hintText = 'Email' mar={0} secureEnable = {false} />
      <InputField hintText = 'Password'mar={16}  secureEnable = {true} />
      <RadioButton radioText = "Remember Me"/>
    </View>

  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      marginLeft: 10,
      marginRight: 10
    }
});


export { Form };
