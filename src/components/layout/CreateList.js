import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image, CheckBox } from 'react-native-elements';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../common/Header';
import { InputField } from '../common/ProfileComp/InputField';
import ContinueButton from '../common/QRScannerComp/ContinueButton';
import PriorityButton from '../common/PriorityButton';
import FloatButton from '../common/ShoppingListComp/FloatButton';

export default class CreateList extends Component{
    state = { checked: false }
    render() {
        return(
            <View style={{flex:1}}>
                <Header header="Shopping List" />
                <View style={{alignItems: "center", marginTop: hp('1%')}}>
                    <InputField width={wp('85%')} label="Add List Name" />
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <InputField width={wp('85%')} label="Due Date" />
                        <Icon
                            name="calendar-month"
                            size={25}
                            color='grey'
                            style={{ marginLeft: -hp('4%'), marginBottom: hp('1%') }}
                        />
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <InputField width={wp('85%')} label="Add Collaborators" />
                        <Icon2
                            name="users"
                            size={22}
                            color='grey'
                            style={{ marginLeft: -hp('4%'), marginBottom: hp('1%') }}
                        />
                    </View>
                </View>
                <Text style={{ color: '#9e9e9e', marginLeft: wp('7.5%') }}>Set Priority</Text>
                <View style={{ marginTop: hp('2%'), flexDirection: "row", justifyContent:"space-evenly" }}>
                    <PriorityButton
                        startcolor='#667eea'
                        endcolor='#65b6ff'
                        height={hp('8.5%')}
                        priority="High"
                    />
                    <PriorityButton
                        startcolor='#4db6ac'
                        endcolor='#1de9b6'
                        height={hp('8.5%')}
                        priority="Medium"
                    />
                    <PriorityButton
                        startcolor='#ff8f00'
                        endcolor='#ffca28'
                        height={hp('8.5%')}
                        priority="Low"
                    />
                </View>
                <CheckBox
                    title='Make it default'
                    textStyle={{ color: '#9e9e9e', fontWeight: "normal" }}
                    uncheckedIcon='square-o'
                    checkedIcon='check-square-o'
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                    containerStyle= {{ marginLeft: wp('5.5%'), backgroundColor: "transparent", borderWidth: 0}}
                    checkedColor='red'
                />
                <View style={{ flex:1, alignItems: "center"}}>
                    <ContinueButton title="Create List" width={wp('85%')} buttonColor='#5663fe' bottom={hp('9%')} />
                    <ContinueButton title="Clear List" width={wp('85%')} buttonColor='transparent' titleColor='#9e9e9e' bottom={hp('1%')} elevation= {-1} />
                </View>
            </View>                
        );
    }
}

const styles=StyleSheet.create({
    
});