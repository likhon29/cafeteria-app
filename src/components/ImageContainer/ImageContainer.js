import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageContainer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/18303685.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  image: {
    // flex: 1,
    // justifyContent: 'center',
    height: 150,
    width:350,
    borderRadius:10
  },
  text: {
    // color: 'white',
    // fontSize: 42,
    // lineHeight: 84,
    // fontWeight: 'bold',
    // textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
})
export default ImageContainer
