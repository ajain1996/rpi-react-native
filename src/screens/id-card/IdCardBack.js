import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function IdCardBack() {
    return (
        <View style={styles.idCard}>
            <View style={styles.idCardRow}>
                <View style={styles.leftWindow} />
                <Image
                    source={require('../../../assets/img/card-user-back.png')}
                    resizeMode="contain"
                    style={{
                        width: 140,
                        height: 140,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />

                <View style={styles.idCardInfo}>
                    <Text style={styles.cardTitle}>REPUBLIC PARTY OF INDIA ATHAWALE</Text>

                    <View style={styles.registrationCard}>
                        <Text style={styles.registrationCardText}>
                            ACTIVE MEMBER REGISTRATION CARD
                        </Text>
                    </View>

                    <Image
                        source={require('../../../assets/img/qr-code.jpg')}
                        resizeMode="contain"
                        style={{ width: 80, height: 80, alignSelf: 'center', marginTop: 10 }}
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
    );
}

const styles = StyleSheet.create({
    idCard: {
        marginTop: 30
    },
    idCardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 9,
        shadowColor: '#999',
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 240,
    },
    idCardInfo: {
        width: '75%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    cardTitle: {
        fontSize: 16,
        color: '#021347',
        fontWeight: '800',
        textAlign: 'center',
        marginLeft: -20,
        marginHorizontal: 30,
        marginBottom: 22,
        marginTop: -12
    },
    registrationCard: {
        backgroundColor: '#021347',
        padding: 9,
        width: '82%',
        alignSelf: 'flex-end',
    },
    registrationCardText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 20,
        letterSpacing: 1,
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
    leftWindow: {
        width: '25%',
        backgroundColor: '#021347',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
});
