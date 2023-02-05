import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchBox from '../../components/SeachBox/SearchBox'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import UpcomingHeader from '../../components/UpcomingHeader/UpcomingHeader'
import ImageContainer from '../../components/ImageContainer/ImageContainer'
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch'
import ListItem from '../../components/ListItem/ListItem'
import { freeGames, paidGames } from './../../model/data'
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider'
import Carousel from '../../components/Carousel/Carousel'

const Home = ({ navigation }) => {
  

  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'blue', fontSize: 18, fontWeight: 'bold' }}>
            Hello, {user.displayName}
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
              source={{
                uri: user.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
        
        <UpcomingHeader></UpcomingHeader>
        <Carousel></Carousel>
        <ImageContainer></ImageContainer>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
