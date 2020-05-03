import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';

class RadioButton extends Component {
  state = { checked : false }

  render() {
      const { container } = styles;
      return (
        <View style={container} >
        <View style= {{flex: 0.24}}>
          <CheckBox checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          />
        </View>
        <View style={{marginTop: 8,flex: 0.7, justifyContent: 'center', alignItems:'flex-start'}} >
          <Text style={styles.textStyle}> {this.props.radioText}</Text>
        </View>
        <View style={{marginTop: 8,marginRight:6,flex: 0.7, justifyContent: 'center', alignItems:'flex-end'}}>
            <TouchableOpacity >
              <Text style= {styles.textStyle}> Forgot Password? </Text>
            </TouchableOpacity>
          </View>
        </View>
      );}
}

const styles = {
  container: {
    flexDirection: 'row',
    height: 40,
    marginTop: 5,
    marginLeft: -6,
    padding: 10,
    flex: 1
  },
  textStyle: {
    fontSize:15,
    fontFamily: 'Roboto-Regular',
    color:'#696969'
  }
}

export {RadioButton};
