import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      
      const storedEmail = await AsyncStorage.getItem('user_email');
      const storedPassword = await AsyncStorage.getItem('user_password');

      if (email === storedEmail && password === storedPassword) {
       
        console.log('Logged in successfully');
        navigation.navigate('Home')
      } else {
        console.warn('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainimage}>
        <Image
          source={require('../assests/hubbletech.png')}
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
           style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 20,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          placeholder="Email"
          placeholderTextColor="#7F7F73"
          value={email}
          onChangeText={e => setEmail(e)}
          backgroundColor="white"
        />

        <TextInput
           style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 20,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          placeholder="Password"
          placeholderTextColor="#7F7F73"
          value={password}
          onChangeText={e => setPassword(e)}
          backgroundColor="white"
          secureTextEntry
        />
      </View>
      <View style={styles.footer}>
      <TouchableOpacity
          style={{
            backgroundColor: '#3BA1FB',
            height: 40,
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 30,
          }} onPress={handleLogin}>
          <Text style={{fontSize: 20}}>LOGIN</Text>
        </TouchableOpacity>
       <View style={{flexDirection:'row',gap:10}}>
       <Text style={{fontSize: 20}}>Go Back to</Text>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Signup')
        }}>
          <Text style={{fontSize: 20, textDecorationLine: 'underline', color:'#3BA1FB'}}>
            Register
          </Text>
        </TouchableOpacity>
       </View>
      </View>
    
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    backgroundColor: 'black',
  },
  mainimage: {
    width: '100%',
    height: 260,
  },
  inputcontainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
});
