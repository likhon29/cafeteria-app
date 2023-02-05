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

const Home = ({ navigation }) => {
  const [menuTab, setMenuTab] = useState(1)
  const onSelectSwitch = (value) => {
    setMenuTab(value)
  }

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
        <SearchBox></SearchBox>
        <UpcomingHeader></UpcomingHeader>
        <ImageContainer></ImageContainer>
        <CustomSwitch
          selectionMode={1}
          option1="Lunch"
          option2="Snacks & Drinks"
          onSelectSwitch={onSelectSwitch}
        ></CustomSwitch>
        {menuTab == 1 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onPress={() => navigation.navigate('FoodDetail', { item })}
            ></ListItem>
          ))}
        {menuTab == 2 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              onPress={() => navigation.navigate('FoodDetail', { item })}
            ></ListItem>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
