import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

export default function RecentsAvatar({avatarTitle, color, storeName}) {
    return(
        <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Avatar rounded title={avatarTitle} containerStyle={{ backgroundColor: color }} size={50} />
            <Text numberOfLines={1} style={{ width: 70,marginTop: 5 }}>{storeName}</Text>
        </TouchableOpacity>
    );
}