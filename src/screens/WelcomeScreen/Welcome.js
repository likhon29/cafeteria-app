import * as React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import Feather
from 'react-native-vector-icons/Feather'
const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        // alignItems: 'space-between',
      }}
    >
      <View style={{ flex: 3 }}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://seeklogo.com/images/J/jahangirnagar-university-logo-2094E07FAB-seeklogo.com.png',
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'orange', fontSize: 30, fontWeight: 'bold' }}>
          Cafeteria
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          // flex:1,
          backgroundColor: 'green',
          padding: 20,
          margin: 20,
          width: '95%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 20, fontFamily: 'Inter-Bold' }}
        >
          Let's Go
        </Text>
        <Feather

          name="chevrons-right"
          style={{ color: 'white', fontSize: 20 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 260,
    marginTop: 200,
  },
})
