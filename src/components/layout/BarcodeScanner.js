import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RNCamera as Camera } from 'react-native-camera';
import ContinueButton from '../common/QRScannerComp/ContinueButton';
import SearchBar from '../common/HomeComp/SearchBar';
import BarcodeMask from '../common/BarcodeComp/BarcodeMask';
import ScannerMask from '../common/QRScannerComp/ScannerMask';
import { Button } from 'react-native-elements';

export default class QRScanner extends Component {
    constructor(props) {
        super(props);
        this.handleTourch = this.handleTourch.bind(this);
        this.state = {
            torchOn: false
        }
    }
    onBarCodeRead = (e) => {
        Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
    }
    render() {
        return (
            <View style={styles.container}>
                
                
                <SearchBar placeholder="Enter broduct Barcode" />
                <View style={ styles.camera } >
                    <Camera
                        style={styles.preview}
                        flashMode={this.state.torchOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                        onBarCodeRead={this.onBarCodeRead}
                        ref={cam => this.camera = cam}
                    // aspect={Camera.Constants.Aspect.fill}
                    >                        
                     {/* <BarcodeMask frameColor='red' frameWidth={wp('60%')}/>    */}
                        <ScannerMask
                            overlayColor='rgba(0,0,0,0.5)'
                            frameColor='red'
                            frameFlexWidth={3}
                            frameFlexHeight={1.3}
                            // titleText="Scan the Store's QR Code"
                            subtitleText='Please scan QR/Barcode and press continue button to see the related product'
                            textBelow='Scanning...'
                        />
                    </Camera>
                </View>
                <View style={{ flex:1, alignItems:"flex-end", flexDirection:"row", width: wp('80%'), marginBottom: hp('16%')}}>
                    <Button
                        title="QR/Barcode"
                        titleStyle={{color:'#000'}}
                        containerStyle={{flex:1, elevation: 10}}
                        buttonStyle={{ backgroundColor:'#bbdefb'}}
                    />
                    <Button
                        disabled
                        title="Photo"
                        containerStyle={{ flex: 1, elevation: 10 }}
                        type='solid'
                    />
                </View>
                <ContinueButton title="SCAN & CONTINUE" buttonColor='#1565c0' iconName='qrcode-scan' iconSize={20} iconColor='#FFF' width={wp('90%')} />
                <View style={styles.bottomOverlay}>
                    {/* <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
                        <Image style={styles.cameraIcon}
                            source={this.state.torchOn === true ? require('../../assets/flasher_on.png') : require('../../assets/flasher_off.png')} />
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }
    handleTourch(value) {
        if (value === true) {
            this.setState({ torchOn: false });
        } else {
            this.setState({ torchOn: true });
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
        // justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    camera: {
        marginVertical: hp('0%'),
        // flex:1,
        height: hp('60%'),
        overflow: "hidden"
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
        backgroundColor: '#FFF'
    },
    bottomOverlay: {
        position: "absolute",
        top: hp('27%'),
        width: "100%",
        flex: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
});