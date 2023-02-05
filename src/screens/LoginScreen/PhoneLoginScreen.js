import React, { useContext, useState } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'
import LoginSVG from '../../assets/images/misc/4957136_Mobile login.svg'
import InputField from './../../components/InputField/InputFeild'
import CustomButton from './../../components/CustomButton/CustomButton'
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider'
import auth from '@react-native-firebase/auth'
const PhoneLoginScreen = ({ navigation }) => {
  const [confirm, setConfirm] = useState(null)
  const [number, setNumber] = useState(null)
  const [code, setCode] = useState('')

  async function registerWithPhone(phoneNumber) {
    // const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
    // setConfirm(confirmation)
    Alert(phoneNumber)
  }

  //   async function confirmCode() {
  //     try {
  //       await confirm.confirm(code);
  //     } catch (error) {
  //       console.log('Invalid code.');
  //     }
  //   }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 45 }}>
        <View style={{ alignItems: 'center' }}>
          <LoginSVG height={300} width={300} />
        </View>

        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: 'blue',
            marginBottom: 30,
            textAlign: 'center',
          }}
        >
          Register
        </Text>

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <View style={{ marginTop: 2 }}>
            <MaterialIcons
              name="phone"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          </View>

          <TextInput
            onChangeText={(text) => setNumber(text)}
            placeholder="Enter Your Phone Number"
            keyboardType="numeric"
            style={{ flex: 1, paddingVertical: 0, color: 'black' }}
            placeholderTextColor={'black'}
          />

          {/* <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: 'blue', fontWeight: '700' }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity> */}
        </View>

        <Button
        title="Phone Number Sign In"
        onPress={() => registerWithPhone('+1 650-555-3434')}
      />
        <TouchableOpacity
      onPress={() => registerWithPhone('+1 650-555-3434')}
      style={{
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#fff',
        }}
      >
       Send OTP
      </Text>
    </TouchableOpacity>

        {/* <Text style={{ color: 'black' }}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{ color: 'blue', fontWeight: '700' }}> Register</Text>
          </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  )
}

export default PhoneLoginScreen

const styles = StyleSheet.create({})
