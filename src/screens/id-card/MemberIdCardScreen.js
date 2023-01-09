import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import IdCardFront from './IdCardFront'
import IdCardBack from './IdCardBack'
import IdCardHeader from './IdCardHeader'

export default function MemberIdCardScreen({ navigation }) {
    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <IdCardHeader title="Active Member Id Card" navigation={navigation} />
            <View style={{ padding: 16 }}>
                <IdCardFront />

                <IdCardBack />
            </View>
        </View>
    )
}

