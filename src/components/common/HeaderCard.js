import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class HeaderCard extends React.Component {
  constructor(props){
    super(props)
  }  
  render() {
        return (
            <View style={styles.card} >
            <View  style={{flex:1,borderWidth:0,borderColor:'red',alignItems:'center'}}>
            <Icon name="menuunfold" size={22} color={'darkblue'}/> 
            </View>
        <View style={{flex:8,paddingLeft:'38%',borderColor:'red',borderWidth:0}}>{this.props.Comp}</View>
            <View style={{flex:1,borderWidth:0,borderRadius:15,borderColor:'darkblue',alignItems:'center',backgroundColor:'skyblue',marginRight:'2%',padding:'1%'}}><Icon name="user" size={22} color={'darkblue' }/></View>          
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
    height:hp('6%'),
  },
});
