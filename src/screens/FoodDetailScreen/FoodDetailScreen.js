import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const FoodDetailScreen = ({ navigation, route }) => {
  console.log(route.params.item)
  const {poster,id,price,title}=route.params.item;
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
      <Image
        source={poster}
        
        style={styles.image}
      />
      
    </View>
    <Text style={{color:'blue',textAlign:'left',fontSize:30,margin:20}}>{title}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FoodDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    alignItems: 'center'
  },
  image: {
   
   
    height: 250,
    width: 350,
    borderRadius: 10,
  },
})
