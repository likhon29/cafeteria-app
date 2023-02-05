import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './../screens/HomeScreen/Home'
import SettingsScreen from './../screens/SettingsScreen/SettingsScreen'
import MenuScreen from './../screens/MenuScreen/MenuScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FoodDetailScreen from './../screens/FoodDetailScreen/FoodDetailScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home3"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetailScreen}
        options={({ route }) => ({ title: route.params.item.title })}
      />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 60,
          backgroundColor: 'white',
        },
      }}
    >
      <Tab.Screen
        name="Home4"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: { display: getTabBarVisibility(route) },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: 'green' },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="food-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={SettingsScreen}
        options={{
          tabBarBadge: 29,
          tabBarBadgeStyle: { backgroundColor: 'green' },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const getTabBarVisibility = (route) => {
  console.log(route)
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed'
  console.log(routeName)
  if (routeName == 'FoodDetail') {
    return 'none'
  }
  return 'flex'
}

export default TabNavigator

const styles = StyleSheet.create({})
