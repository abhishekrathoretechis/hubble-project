// import React, { useState } from 'react';
// import { View, Button, Image, TouchableOpacity, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as ImagePicker from 'react-native-image-picker';

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const selectImage = () => {
//     const options = {
//       title: 'Select Image',
//       cancelButtonTitle: 'Cancel',
//       chooseFromLibraryButtonTitle: 'Choose from Library',
//       mediaType: 'photo',
//     };

//     ImagePicker.launchImageLibrary(options, response => {
//       console.log('Image Picker Response:',response.assets[0].uri);
//       if (!response.didCancel) {
//         setSelectedImage(response.assets[0].uri);
//       }
//     });
//   };

//   const postImage = async () => {
//     try {
//       if (selectedImage) {
//         // Save the image URI to AsyncStorage
//         await AsyncStorage.setItem('postedImage', selectedImage);
//         console.log('Image posted and saved successfully');
//         setSelectedImage(null); // Clear the selected image
//       } else {
//         console.log('No image selected to post');
//       }
//     } catch (error) {
//       console.error('Error posting image:', error);
//     }
//   };

//   return (
//     <View>
//       {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />}
//       <TouchableOpacity onPress={selectImage}>
//         <Text>Select Image</Text>
//       </TouchableOpacity>
//       <Button title="Post Image" onPress={postImage} />
//     </View>
//   );
// };

// export default App;

// import { StyleSheet, Text, View ,Image,StatusBar} from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View style= {styles.container}>
//       <StatusBar hidden />
//       <Image source={require('./assests/mylogo.png')} resizeMode='center'/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#1c2858',
//     width:'100%',
//     justifyContent:'center',
//     alignItems:"center"
//   }
// })
import React from 'react'
import { StyleSheet} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Home from './screens/Home';
import Post from './screens/Post';

const Stack = createStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Post" component={Post} />
  </Stack.Navigator>
  </NavigationContainer>
  
  )
}

export default App

const styles = StyleSheet.create({})