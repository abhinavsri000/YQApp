/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RNCamera as Camera} from 'react-native-camera';
import ScannerMask from '../common/QRScannerComp/ScannerMask';
import ContinueButton from '../common/QRScannerComp/ContinueButton';
import RecentsAvatar from '../common/QRScannerComp/RecentsAvatar';

export default class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.handleTourch = this.handleTourch.bind(this);
    this.state = {
      torchOn: false,
    };
  }
  onBarCodeRead = (e) => {
    Alert.alert('Barcode value is' + e.data, 'Barcode type is' + e.type);
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 18, color: '#000'}}>Recents</Text>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{paddingBottom: 20}}>
            <RecentsAvatar
              avatarTitle="BB"
              storeName="Big Bazaar"
              color="green"
            />
            <RecentsAvatar
              avatarTitle="RT"
              storeName="Reliance Trends"
              color="orange"
            />
            <RecentsAvatar avatarTitle="S" storeName="Spencer's" color="blue" />
            <RecentsAvatar
              avatarTitle="P"
              storeName="Pantaloons"
              color="indigo"
            />
            <RecentsAvatar
              avatarTitle="VM"
              storeName="Vishal Mart"
              color="red"
            />
          </ScrollView>
        </View>
        <View style={styles.camera}>
          <Camera
            style={styles.preview}
            flashMode={
              this.state.torchOn
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            }
            onBarCodeRead={this.onBarCodeRead}
            ref={(cam) => (this.camera = cam)}
            // aspect={Camera.Constants.Aspect.fill}
          >
            <ScannerMask
              overlayColor="rgba(0,0,0,0.5)"
              frameColor="#3f51b5"
              frameFlexWidth={2}
              frameFlexHeight={1.3}
              titleText="Scan the Store's QR Code"
              subtitleText="Align QR code within frame to scan"
              textBelow="Scanning..."
            />
            <ContinueButton
              title="Continue"
              buttonColor="#3f51b5"
              width={wp('80%')}
              screenName="BBHome"
            />
          </Camera>
        </View>
        {/* <View style={styles.bottomOverlay}> */}
        {/* <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
                        <Image style={styles.cameraIcon}
                            source={this.state.torchOn === true ? require('../../assets/flasher_on.png') : require('../../assets/flasher_off.png')} />
                    </TouchableOpacity> */}
        {/* </View> */}
      </View>
    );
  }
  handleTourch(value) {
    if (value === true) {
      this.setState({torchOn: false});
    } else {
      this.setState({torchOn: true});
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row',
  },
  camera: {
    // flex:1,
    height: hp('55%'),
    width: wp('100%'),
    overflow: 'hidden',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 10,
    height: 40,
    width: 40,
    backgroundColor: '#FFF',
  },
  bottomOverlay: {
    position: 'absolute',
    top: hp('27%'),
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
