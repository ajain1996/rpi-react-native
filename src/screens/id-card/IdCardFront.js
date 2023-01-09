import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function IdCardFront() {
    return (
        <View style={styles.idCard}>
            <View style={styles.idCardRow}>
                <View style={styles.idCardInfo}>
                    <Text style={styles.idName}>SAVITRI SONAWANE</Text>
                    <Text style={styles.memberType}>Active Member</Text>

                    <View style={styles.idRow}>
                        <Text style={styles.memberInfo}>Age</Text>
                        <Text style={styles.memberInfo2}>30 Years</Text>
                    </View>

                    <View style={styles.idRow}>
                        <Text style={styles.memberInfo}>Assembly</Text>
                        <Text style={styles.memberInfo2}>GHATKOPAR</Text>
                    </View>

                    <View style={styles.idRow}>
                        <Text style={styles.memberInfo}>District</Text>
                        <Text style={styles.memberInfo2}>NORTH EAST MUMBAI</Text>
                    </View>

                    <View style={styles.idRow}>
                        <Text style={styles.memberInfo}>Membership ID</Text>
                        <Text style={styles.memberInfo2}>MUMNEG079</Text>
                    </View>
                </View>

                <View style={{ width: "25%", backgroundColor: "#fff" }}>
                    <Image
                        source={require("../../../assets/img/card-user.jpg")}
                        resizeMode="contain"
                        style={{ width: 110, height: 110, borderRadius: 100, marginLeft: -50, borderWidth: 9, borderColor: "#fff" }}
                    />
                </View>
            </View>
            <View style={{ position: 'absolute', right: 6, top: 6, backgroundColor: "#021347", padding: 5 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/img/logo.png')}
                        resizeMode="contain"
                        style={{ width: 20, height: 20, tintColor: "#fff" }}
                    />
                    <Text style={styles.logoTitle1}>R.P.I</Text>
                    <Text style={styles.logoTitle2}>ATHAWALE</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    idCardRow: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        elevation: 9, shadowColor: "#999", backgroundColor: "#fff", borderRadius: 20
    },
    idCardInfo: {
        width: "75%", backgroundColor: "#021347", padding: 20,
        borderTopLeftRadius: 20, borderBottomLeftRadius: 20
    },
    idName: {
        fontSize: 18, color: "#fff", fontWeight: "800"
    },
    memberType: {
        fontSize: 10, color: "#fff", fontWeight: "400", opacity: 0.8, marginBottom: 10
    },
    memberInfo: {
        fontSize: 12, color: "#fff", fontWeight: "400", width: "40%", opacity: 0.8
    },
    memberInfo2: {
        fontSize: 12, color: "#fff", fontWeight: "600", width: "54%",
    },
    idRow: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginVertical: 4
    },
    logoTitle1: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '600',
    },
    logoTitle2: {
        fontSize: 6,
        color: '#fff',
        fontWeight: '600',
        marginTop: -3,
    },
})