import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.mainlogo}>
        <Image source={require('../assests/hubbletech.png')} />
      </View>
      <View style={styles.registerbutton}>
        <TouchableOpacity
          style={{
            backgroundColor: '#3BA1FB',
            width: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{color: 'white', fontSize: 30}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
  },
  mainlogo: {
    flex: 0.7,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerbutton: {
    flex: 0.3,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});
