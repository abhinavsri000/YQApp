import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={{flexDirection:"row", alignItems: "center"}}>
            <View style={{flex:1, alignItems: "flex-start"}} >
                <Text style={{ marginLeft: wp('1%'), fontSize: 16 }}>Save card information</Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }} >
                <Switch
                    trackColor={{ false: "#767577", true: "#060039" }}
                    thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>            
        </View>
    );
}

const styles = StyleSheet.create({
    
});
