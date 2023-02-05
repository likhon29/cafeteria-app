import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Touchable } from 'react-native'
export default function UpcomingHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'black', fontSize: 16 }}>Upcoming Events</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text
          style={{
            color: 'green',
            fontSize: 18,
            textDecorationLine: 'underline',
          }}
        >
          See all
        </Text>
      </TouchableOpacity>
    </View>
  )
}
