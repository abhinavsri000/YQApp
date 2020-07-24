import React, {Component} from 'react';
import {StyleSheet, View, Text, Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Search from '../common/HomeComp/SearchBar';
import Title from '../common/HomeComp/Title';
import TrendingOffers from '../common/HomeComp/TrendingOffers';
import ShoppingList from '../common/HomeComp/ShoppingList';
import BottomNavigation from '../common/HomeComp/BottomNavigation';
import HeaderCard from '../common/HeaderCard';

/* can a component return another component */
export default class Home extends Component {
  render() {
    return (
      <View>
        <HeaderCard Comp = {<Image 
                   source = {require('../../assets/Y(2).png')}
                   style = {{
                     width: 40,
                     height: 40,
                   }}/>}/>
      </View>
    );
  }
}
 const styles= StyleSheet.create(
   {
     card:{
       flex:1,
       backgroundColor:'red',
       borderWidth:1,
       borderColor: 'red',
       padding:0,
       borderRadius:4,
       margin:10,
       width:50,
       height:100,

     }
   }
 );