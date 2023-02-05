import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
const SearchBox = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginVertical: 12,
        alignItems:'center'
      }}
    >
      <Feather
        name="search"
        size={20}
        color="#C6C6C6"
        style={{ marginRight: 5 }}
      />
      <TextInput style={{ color: 'green' }}>Search Here...</TextInput>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({})
