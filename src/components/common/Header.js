import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

class Header extends Component {
    render() {
        return (
            <View style={styles.card} >
            <View style={{flex:1,borderWidth:0,borderColor:'red'}}>
            <Icon name="menuunfold" size={22} color={'darkblue'}/>
            </View>
            <View style={{flex:8,paddingLeft:'38%',borderColor:'red',borderWidth:0}}><Image 
                   source = {require('../../assets/Y(2).png')}
                   style = {{
                     width: 40,
                     height: 40,
                   }}/></View>
                   
          </View>        
            );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 0,
    flexDirection: 'row',
    width: '100%',
    padding: 2,
    elevation: 1,
    margin: 2,
    borderColor: 'red',
  },
});
