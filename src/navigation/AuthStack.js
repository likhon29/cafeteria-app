import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './../screens/WelcomeScreen/Welcome'
import Home from './../screens/HomeScreen/Home'
import OnBoardingScreen from './../screens/OnBoardingScreen/OnBoardingScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegisterScreen from './../screens/RegisterScreen/RegisterScreen'
import SignupScreen from '../screens/SignupScreen/SignupScreen'
import PhoneLoginScreen from './../screens/LoginScreen/PhoneLoginScreen';
import OnBoardingScreen2 from './../screens/OnBoardingScreen/OnBoardingScreen2';
const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="PhoneLoginScreen" component={PhoneLoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
