import React from 'react'
import { Image } from 'react-native'
import { TouchableHighlight } from 'react-native'

export default function BackBtn({ onPress }) {
    return (
        <TouchableHighlight onPress={onPress} underlayColor="#f7f8f9">
            <Image
                source={require("../../assets/img/back.png")}
                resizeMode="contain"
                style={{ width: 70, height: 70 }}
            />
        </TouchableHighlight>
    )
}