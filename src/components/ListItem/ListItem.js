import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Overlay } from '@rneui/themed'
import { Icon } from '@rneui/base'

const ListItem = ({ item, onPress }) => {
  const { title, subtitle, poster ,price,quantity } = item
  const [visible, setVisible] = useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          marginVertical: 5,
          borderColor: 'green',
          borderWidth: 1,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Image
          source={item.poster}
          style={{ width: 55, height: 55, borderRadius: 10, marginRight: 10 }}
        />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ padding: 5 }}>
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                color: 'green',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              {title.length > 15 ? title.substring(0, 15) + '..' : title}
            </Text>
            <Text style={{ color: '#333' }}>
              {subtitle.length > 15
                ? subtitle.substring(0, 15) + '...'
                : subtitle}
            </Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <Text
              style={{ color: '#F96613', fontSize: 18, fontWeight: 'bold' }}
            >
             {price}Tk
            </Text>
            <Text style={{ color: '#333' }}>{quantity} items</Text>
          </View>
        </View>

        {/* <Button title="Buy Now" style={{ margin: 5 }} onPress={onPress} /> */}

        <TouchableOpacity style={{ margin: 5 ,backgroundColor:'#0aada8',padding:10,borderRadius:10}} onPress={onPress}>
          <Text style={{ fontSize:16}}>Order</Text>
        </TouchableOpacity>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <Text style={styles.textPrimary}>Hello!</Text>
          <Text style={styles.textSecondary}>
            Welcome to React Native Elements
          </Text>
          <Text style={styles.textPrimary}>Hello!</Text>
          <Text style={styles.textSecondary}>
            Welcome to React Native Elements
          </Text>
          <Text style={styles.textPrimary}>Hello!</Text>
          <Text style={styles.textSecondary}>
            Welcome to React Native Elements
          </Text>
          <Text style={styles.textPrimary}>Hello!</Text>
          <Text style={styles.textSecondary}>
            Welcome to React Native Elements
          </Text>
          <Text style={styles.textPrimary}>Hello!</Text>
          <Text style={styles.textSecondary}>
            Welcome to React Native Elements
          </Text>
          <Text style={styles.textPrimary}>Hello!</Text>
          <Text style={styles.textSecondary}>
            Welcome to React Native Elements
          </Text>

          <Button
            icon={
              <Icon
                name="wrench"
                type="font-awesome"
                color="red"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Start Building"
            onPress={toggleOverlay}
          />
        </Overlay>
      </View>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  textPrimary: {
    color: 'red',
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
})
