import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './../screens/HomeScreen/Home'
import AboutScreen from './../screens/AboutScreen/AboutScreen'
import OrderScreen from './../screens/OrderScreen/OrderScreen'
import MessageScreen from './../screens/MessageScreen/MessageScreen'
import SettingsScreen from './../screens/SettingsScreen/SettingsScreen'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TabNavigator from './TabNavigator'
const Drawer = createDrawerNavigator()
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -15,
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home 2"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people-outline" size={22} color={color}></Ionicons>
          ),
        }}
      />
      <Drawer.Screen
        name="Order"
        component={OrderScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={22} color={color}></AntDesign>
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="message1" size={22} color={color}></AntDesign>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="setting" size={22} color={color}></AntDesign>
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default AppStack
