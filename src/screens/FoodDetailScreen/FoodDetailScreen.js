import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FoodDetailScreen = ({ navigation, route }) => {
  console.log(route.params.item)
  return (
    <View
      style={{
        flex: 1,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'red',
        }}
      >
        FoodDetailScreen
      </Text>
      <Text
        style={{
          color: 'red',
        }}
      >
        {route.params?.item.title}
      </Text>
    </View>
  )
}

export default FoodDetailScreen

const styles = StyleSheet.create({})
