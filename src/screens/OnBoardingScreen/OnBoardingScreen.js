import * as React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
const OnBoardingScreen = ({ navigation }) => {
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
      <View style={{ flex: 0.1 }}>
        <Image
          style={styles.top}
          source={{
            uri: 'https://demo.themefisher.com/agico/images/background/banner.png',
          }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/2/29/JU_logo.png?20220904202856',
          }}
        />
      </View>
      
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'orange', fontSize: 40, fontWeight: 'bold',fontFamily: 'Gill Sans' }}>
          Cafeteria
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={{
          flex: 0.4,

          // padding: 20,
          margin: 20,
          width: '95%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}
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
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  top: {
    width: 400,
    height: 200,
    // marginTop: 200,
  },
  logo: {
    width: 200,
    height: 300,
    marginTop: 210,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})
