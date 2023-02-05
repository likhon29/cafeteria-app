import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnBoardingScreen2 = () => {
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
      {/* <View style={{ flex: 3 }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://seeklogo.com/images/J/jahangirnagar-university-logo-2094E07FAB-seeklogo.com.png',
        }}
      />
    </View> */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'orange', fontSize: 30, fontWeight: 'bold' }}>
          Cafeteria
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
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

export default OnBoardingScreen2

const styles = StyleSheet.create({})
