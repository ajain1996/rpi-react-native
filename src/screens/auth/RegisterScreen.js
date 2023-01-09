import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import MText from '../../components/MText';
import { COLORS } from '../../utils/theme';

export default function RegisterScreen({ navigation }) {
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [FullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showEye, setShowEye] = useState('');

  const handleSubmitOnPress = () => {
    if (FullName.length === 0) {
      setFullNameError('Full name is required');
    } if (email.length === 0) {
      setEmailError('Email is required');
    } else if (!email.includes('@') || !email.includes('gmail.com')) {
      setEmailError('Invalid Email');
    } if (phone.length === 0) {
      setPhoneError('Please enter phone number');
    } if (password.length === 0) {
      setPasswordError('Invalid Password');
    } else if (password.length < 6) {
      setPasswordError('Password must be 6 characters long');
    } else {
    }
    navigation.navigate('PaymentsScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View>
        <View style={styles.header_block}>
          <Text />
          <MText fs={24} textColor="#354E88" fw="700" text={'R.P.I'} />
          <MText fs={16} textColor="#354E88" fw="600" text={'ATHAWALE'} />
          <View style={{ height: 35 }} />

          <MText fs={20} textColor="black" fw="900" text={'Getting Started'} />

          <View style={{ marginTop: 4 }} />

          <MText
            fs={14}
            textColor="grey"
            text={'Create an account to continue!'}
          />
        </View>
        <View style={{ height: 10 }} />

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <CustomInput
            placeholderText="Full name"
            iconType="user"
            headingText="Full name"
            error={fullNameError}
            labelValue={FullName}
            onChangeText={val => {
              setFullName(val);
              setFullNameError('');
            }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <CustomInput
            placeholderText="Email"
            iconType="mail"
            headingText="Email"
            keyboardType={'email-address'}
            autoCapitalize="none"
            error={emailError}
            labelValue={email}
            onChangeText={val => {
              setEmail(val);
              setEmailError('');
            }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <CustomInput
            placeholderText="Phone"
            iconType="phone"
            headingText="Phone number"
            keyboardType={'numeric'}
            autoCapitalize="none"
            maxLength={10}
            error={phoneError}
            labelValue={email}
            onChangeText={val => {
              setPhone(val);
              setPhoneError('');
            }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <CustomInput
            placeholderText="Address"
            iconType="home"
            headingText="Address"
            keyboardType={'default'}
            autoCapitalize="none"
            labelValue={email}
            onChangeText={val => {
              setAddress(val);
            }}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <CustomInput
            placeholderText="Password"
            iconType={showEye ? 'eye' : 'eyeo'}
            headingText="Password"
            error={passwordError}
            secureTextEntry={showEye ? false : true}
            labelValue={password}
            onChangeText={val => {
              setPassword(val);
              setPasswordError('');
            }}
            onPress={() => {
              setShowEye(!showEye);
            }}
          />
        </View>
        <View style={{ marginTop: 10 }} />

        <CustomButton
          fs={16}
          text={'Sign Up'}
          fw={'600'}
          textColor={COLORS.white}
          bgColor={COLORS.primary}
          width={'100%'}
          height={50}
          onPress={handleSubmitOnPress}
        />
        <View style={{ marginTop: 20 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <MText
            fs={16}
            text={'Already have an account? '}
            textColor={COLORS.gray}
            fw="600"
          />
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <MText
              fs={16}
              text={'Sign In'}
              fw="700"
              textColor={COLORS.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 12,
    flexGrow: 1,
    justifyContent: 'space-between',
    width: "100%",
    height: "100%"
  },
  header_block: {
    alignItems: 'center',
    width: '100%',
  },
  login_logo: {
    width: 160,
    height: 60,
    marginTop: 20,
    marginBottom: 30,
  },
});
