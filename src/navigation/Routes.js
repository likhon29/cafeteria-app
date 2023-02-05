import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider'
import { useState } from 'react'
import auth from '@react-native-firebase/auth'
const Routes = () => {
  const { user, setUser } = useContext(AuthContext)
  

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes
