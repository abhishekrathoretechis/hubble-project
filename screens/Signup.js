import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    try {
      if (!email || !password || !confirmPassword || !phoneNumber || !name) {
        console.warn('All fields are required');
        return;
      }
  
      if (!email.includes('@')) {
        console.warn('Email must contain "@"');
        return;
      }
  
      if (isNaN(phoneNumber)) {
        console.warn('Phone number must be a numerical value');
        return;
      }
  
      if (password !== confirmPassword) {
        console.warn('Password and confirm password must match');
        return;
      }
  
      
      await AsyncStorage.setItem('user_email', email);
      await AsyncStorage.setItem('user_password', password);
  
      
      console.log('Registered with email:', email);
      console.log('Password:', password);
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setConfirmPassword('');
      setName('');
  
      navigation.navigate('Home'); 
    } catch (error) {
      console.error('Error registering:', error);
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
          placeholder="Name"
          placeholderTextColor="#7F7F73"
          onChangeText={text => setName(text)}
          value={name}
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          backgroundColor="white"
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#7F7F73"
          onChangeText={text => setEmail(text)}
          value={email}
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          backgroundColor="white"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#7F7F73"
          onChangeText={text => setPassword(text)}
          value={password}
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          backgroundColor="white"
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#7F7F73"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          backgroundColor="white"
          secureTextEntry
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#7F7F73"
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          style={{
            color: 'black',
            borderWidth: 1,
            borderColor: 'white',
            marginBottom: 10,
            width: '90%',
            borderRadius: 10,
            fontSize: 18,
            paddingHorizontal: 10,
          }}
          backgroundColor="white"
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
            marginBottom: 10,
          }} onPress={handleRegister}>
          <Text style={{fontSize: 20}}>REGISTER</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>Already have an account?</Text>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Login')
        }}>
          <Text style={{fontSize: 20, textDecorationLine: 'underline',color:'#3BA1FB'}}>
            Login
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=> {
            navigation.navigate('Home')
        }}>
            <Text style={{color:'white'}}>Home</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainimage: {
    width: '100%',
    height: 230,
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

export default Signup;
