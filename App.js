import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'
import AppStack from './src/navigation/AppStack'
import AuthProvider from './src/contexts/AuthProvider/AuthProvider'
import AppNav from './src/navigation/AppNav'
import Routes from './src/navigation/Routes'

function App() {
  return (
    <AuthProvider>
      <Routes></Routes>
    </AuthProvider>
  )
}

export default App
