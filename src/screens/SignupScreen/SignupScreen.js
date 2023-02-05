import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import GoogleSVG from '../../assets/images/misc/google.svg'
import FacebookSVG from '../../assets/images/misc/facebook.svg'
import TwitterSVG from '../../assets/images/misc/twitter.svg'
import image from '../../assets/images/misc/register.jpg'
import { ImageBackground } from 'react-native'

export default function SignupScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <ImageBackground
          style={{ width: 300, height: 150, marginVertical: 30 }}
          imageStyle={{ borderRadius: 25 }}
          source={require('../../assets/images/misc/register.jpg')}
        />
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          textAlign: 'center',
          marginVertical: 10,
        }}
      >
        Create an new account
      </Text>
      {/* <Text style={styles.label}>Full Name</Text> */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Your Full Name"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor={'gray'}
          />
        )}
        name="fullName"
        rules={{ required: true }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Your Email Address"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor={'gray'}
          />
        )}
        name="email"
        rules={{ required: true }}
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Your Phone Number"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor={'gray'}
          />
        )}
        name="phoneNumber"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Enter Your password"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor={'gray'}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      <View style={{ marginHorizontal: 40, marginVertical: 10 }}>
        <Button title="Signup" onPress={handleSubmit(onSubmit)} />
      </View>

      {/* <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          placeholder="Enter Your Confirm Password"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholderTextColor={'black'}
          />
        )}
        name="cpassword"
        rules={{ required: true }}
      /> */}
      <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
        Or, login with ...
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <GoogleSVG height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <FacebookSVG height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderColor: '#ddd',
            borderWidth: 2,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          <TwitterSVG height={24} width={24} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <Text style={{ color: 'black' }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'blue', fontWeight: '700' }}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 24,
    // paddingTop: Constants.statusBarHeight,
    padding: 8,
    // backgroundColor: '#0e101c',
  },
  input: {
    color: 'black',

    borderColor: 'green',
    borderWidth: 1,
    height: 40,
    padding: 10,
    borderRadius: 4,
    margin: 10,
  },
})
