import * as React from 'react';
import { Image } from 'react-native';
import { Banner } from 'react-native-paper';

import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';



const AboutScreen = () => {
  const [visible, setVisible] =useState(true);
  return (
    <View>
     <Banner
      visible={visible}
      style={{backgroundColor: 'white',borderWidth:1,borderColor:'green',}}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://junivphotopedia.files.wordpress.com/2011/11/9191000.jpg',
          }}
          style={{
            width: 180,
            height: 220,
            borderWidth:1,
            borderColor:'gray',
            borderRadius:5
          }}
        />
      )}>
      This is the Cafeteria of Jahangirnagar University.Any Students of Jahangirnagar University can uses it as for time passing or take launch. It can also reserve for a party or events.
    </Banner>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({})
