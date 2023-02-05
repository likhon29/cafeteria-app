import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const TimeSlot = ({date,slot,time}) => {
  return (
    <View
        style={{
          flexDirection: 'row',
          // flex: 1,
          alignItems: 'center',
          marginVertical: 5,
          borderColor: 'green',
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          justifyContent: 'space-between',
          backgroundColor:'green'
        }}
      >
        
      <Text style={{fontSize:16,color:'green',backgroundColor:'white',padding:10,borderRadius:5}}>{slot}</Text>
      <Text style={{fontSize:16,color:'blue',backgroundColor:'white',padding:10,borderRadius:5}}>{time}</Text>
      <TouchableOpacity style={{  backgroundColor:'#0aada8',padding:10,borderRadius:10}} onPress={()=>{}}>
          <Text style={{ fontSize:16}}>Book</Text>
        </TouchableOpacity>


        
        
      </View>
  )
}

export default TimeSlot

const styles = StyleSheet.create({})