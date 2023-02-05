import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider'
import { auth } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
const CustomDrawer = (props) => {
  const LogOut = async () => {
    try{
      await GoogleSignin.revokeAccess();
      await auth.signOut();
      console.log('Signout done')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}
      >
        <ImageBackground
          source={require('../../assets/images/menu-bg.jpeg')}
          style={{ padding: 20 }}
        >
          <Image
            source={require('../../assets/pic.jpg')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text style={{ fontSize: 18, color: 'yellow' }}>
            Abdur Rouf Likhon
          </Text>
          <View>
            <Text>48th Batch</Text>
            <Text>Information and communication Technology - JU</Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons
              name="share-social-outline"
              size={22}
              color="green"
            ></Ionicons>
            <Text style={{ color: 'green', fontSize: 16, marginLeft: 10 }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            LogOut
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} color="red"></Ionicons>
            <Text
              style={{
                color: 'red',
                fontSize: 16,
                marginLeft: 10,
                fontWeight: 'bold',
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})
