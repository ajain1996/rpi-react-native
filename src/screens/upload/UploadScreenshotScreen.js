import { View, Text, TouchableHighlight, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../../components/CustomButton';
import { COLORS } from '../../utils/theme';
import { launchImageLibrary } from 'react-native-image-picker';

export default function UploadScreenshotScreen({ navigation }) {

    const [image, setImage] = React.useState('');
    const handleSubmitOnPress = () => {
        navigation.navigate('MemberIdCardScreen');
    }

    const getImage = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, response => {
            if (response?.didCancel) {
            } else if (response?.error) {
            } else if (response?.customButton) {
            } else {
                console.log(response, '<<<<thisis  response');
                setImage(response?.assets[0].uri);
            }
        });
    };

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.wrapper}>
                {image?.length === 0
                    ? <TouchableHighlight style={styles.uploadButton} onPress={getImage} underlayColor="#dcdcdc">
                        <Entypo name="camera" size={120} color="silver" />
                    </TouchableHighlight>
                    : <View>
                        <Image
                            source={{ uri: image }}
                            resizeMode="stretch"
                            style={{ width: '100%', height: 280 }}
                        />
                        <TouchableHighlight style={styles.crossbtn} onPress={() => { setImage("") }} underlayColor="#999">
                            <MaterialIcons name="cancel" size={26} color="#000" />
                        </TouchableHighlight>
                    </View>}
                <CustomButton
                    fs={18}
                    text={'Upload'}
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
    uploadButton: {
        width: 200, height: 200,
        borderRadius: 100,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: "20%"
    },
    crossbtn: {
        position: "absolute",
        top: -10,
        right: -10
    }
})