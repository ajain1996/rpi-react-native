import { View, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { COLORS, SIZES } from '../../utils/theme';

export default function PaymentsScreen({ navigation }) {

    const handleSubmitOnPress = () => {
        navigation.navigate('UploadScreenshotScreen');
    }

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.wrapper}>
                <Image
                    source={require("../../../assets/img/qr-code.jpg")}
                    resizeMode="stretch"
                    style={{ width: SIZES.width / 1.1, height: SIZES.width / 1.1, alignSelf: 'center' }}
                />
                <CustomButton
                    fs={18}
                    text={'Make Payment'}
                    fw={'600'}
                    textColor={COLORS.white}
                    bgColor={COLORS.primary}
                    width={'100%'}
                    height={80}
                    onPress={handleSubmitOnPress}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20, height: "100%",
        justifyContent: 'space-between',
        paddingVertical: "20%"
    },
})