import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, Divider, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../common/Header';
import { InputField } from '../common/ProfileComp/InputField';
import ContinueButton from '../common/QRScannerComp/ContinueButton';

export default class EditProfile extends Component{
    render() {
        return(
            <View>
                <Header header="Profile" />
                <View style={{ alignItems: "center" }}>
                    <InputField width={wp('85%')} label="Name" />
                    <InputField width={wp('85%')} label="Adddress" />
                    <InputField width={wp('85%')} label="City" />
                    <InputField width={wp('85%')} label="Gender" />
                    <InputField width={wp('85%')} label="Email" />
                    <InputField width={wp('85%')} label="Phone Number" />
                    <ContinueButton width={wp('90%')} title="SAVE" buttonColor='#1e88e5' />
                </View>
            </View>                
        );
    }
}

const styles=StyleSheet.create({
    
});