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
import {  LunchItem, SnacksItem } from './../../model/data'
import { AuthContext } from './../../contexts/AuthProvider/AuthProvider'
import Carousel from '../../components/Carousel/Carousel'

const MenuScreen = ({ navigation }) => {
  const [menuTab, setMenuTab] = useState(1)
  const onSelectSwitch = (value) => {
    setMenuTab(value)
  }

  const images = [
    require('../../assets/Food/khicuri.jpg'),
    require('../../assets/Food/jhalfry.jpg'),
    require('../../assets/Food/roast.jpg'),
    require('../../assets/Food/water.jpg'),
    require('../../assets/singara.jpg'),
   
    
  ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
      <Text style={{ color: 'green', fontSize: 25 }}>
        Food Menu
      </Text>
      <Carousel images={images}></Carousel>
    <View style={{ marginVertical:10,marginBottom:20}}>
      <CustomSwitch
        selectionMode={1}
        option1="Lunch"
        option2="Snacks & Drinks"
        onSelectSwitch={onSelectSwitch}
        ></CustomSwitch>
        <SearchBox></SearchBox>
      {menuTab == 1 &&
        LunchItem.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', { item })}
          ></ListItem>
        ))}
      {menuTab == 2 &&
        SnacksItem.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('FoodDetail', { item })}
          ></ListItem>
        ))}
    </View>

    </ScrollView>
    </SafeAreaView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({})
