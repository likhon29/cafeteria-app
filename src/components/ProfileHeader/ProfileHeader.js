import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
export default function ProfileHeader({ navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'blue', fontSize: 18, fontWeight: 'bold' }}>
        Hello, MD Abdur Rouf Likhon
      </Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <ImageBackground
          style={{ width: 35, height: 35 }}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/pic.jpg')}
        />
      </TouchableOpacity>
    </View>
  )
}
