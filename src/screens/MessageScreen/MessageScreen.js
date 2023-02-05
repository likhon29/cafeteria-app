import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MessageScreen = () => {
  return (
    <View>
      <Text
        style={{
          margin:100,
          color: 'green',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        MessageScreen
      </Text>
    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})
