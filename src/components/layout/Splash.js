import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';

export default class Splash extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.brand}>
                <View style={styles.logo}>
                  <Image 
                  source = {require('../../assets/Y(2).png')}
                  style = {{
                    width: 90,
                    height: 90,
                  }}
                  />
                </View>
            </View>

            <View style={styles.pride}>
                <Text style={styles.prideText}>Made in Bharat</Text>
            </View>
        </View>
      );
    }
  }

  const styles=StyleSheet.create(
      {
          container :{
            flex: 1,
            backgroundColor : 'white',
            justifyContent : "center",
            alignItems:"center",
          },
          brand:{
            flex: 20,
            borderWidth : 0,
            borderColor : 'red',
            justifyContent : 'center',
            alignItems : 'center',
          },
          pride:{
            flex: 4,  
            alignItems : 'center',
            borderColor: 'red',
            borderWidth:0,
            justifyContent: 'flex-end',
          },
          prideText:{
              marginBottom : '5%',
              color : 'grey',
              fontSize:12,
             
          },
          apptext:{
            fontSize : 30,
            fontWeight : '900',
            color : 'darkblue',
          },
      }
  );