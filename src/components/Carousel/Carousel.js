import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
const Carousel = () => {
  const images = [
    require('../../assets/18303685.jpg'),
    require('../../assets/abc.jpg'),
    require('../../assets/gujarat.jpeg'),
    require('../../assets/1-kathiyawadi-restaurants-1-ki1aq.jpg'),
    
  ]
  return (
    <View>
      <SliderBox
        autoplay
        circleLoop
        images={images}
        dotColor="yellow"
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxVerticalPadding={20}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10
        }}
        ImageComponentStyle={{borderRadius: 10, margin: 5}}
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})
