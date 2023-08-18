import React, { useState } from 'react';
import { View, Button, Image, StyleSheet,TouchableOpacity,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const Post = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].uri);
        console.log(response.assets[0].uri); 
      }
    });
  };

  const handleCameraLaunch = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setSelectedImage(response.assets[0].uri);
        console.log(response.assets[0].uri);
      }
    });
  };

  const handlePost = async () => {
    if (selectedImage) {
      try {
        
        const existingImages = await AsyncStorage.getItem('postedImages');
        const updatedImages = existingImages
          ? JSON.parse(existingImages).concat(selectedImage)
          : [selectedImage];

        
        await AsyncStorage.setItem('postedImages', JSON.stringify(updatedImages));

        navigation.navigate('Home');
        setSelectedImage(null);
      } catch (error) {
        console.error('Error saving image:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
       <TouchableOpacity
        onPress={handleImagePick}
        style={{backgroundColor:'#3BA1FB',width:'50%',height:'5%',justifyContent:'center',alignItems:"center",borderRadius:5,marginBottom:10}}
      >
        <Text style={{ color: 'white',fontSize:20 }}>Chose from Library</Text> 
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleCameraLaunch}
        style={{backgroundColor:'#3BA1FB',width:'50%',height:'5%',justifyContent:'center',alignItems:"center",borderRadius:5,marginBottom:10}}
      >
        <Text style={{ color: 'white',fontSize:20 }}>Camera</Text> 
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePost}
        style={{backgroundColor:'#3BA1FB',width:'50%',height:'5%',justifyContent:'center',alignItems:"center",borderRadius:5,marginBottom:10}}
      >
        <Text style={{ color: 'white',fontSize:20 }}>Post</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default Post;
