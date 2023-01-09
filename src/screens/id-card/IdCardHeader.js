import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import BackBtn from '../../components/BackBtn'

export default function IdCardHeader({ title, navigation }) {
    return (
        <View style={{ ...styles.container }}>
            <BackBtn onPress={() => { navigation.goBack() }} />
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>{title}</Text>
            <Text />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingRight: 16,
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff"
    }
})