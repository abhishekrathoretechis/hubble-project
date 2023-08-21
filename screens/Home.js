import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = ({ navigation }) => {
  const [images,setImages] = useState([]);   
  
  

  useEffect(() => {
    
    loadImagesFromStorage();    
  }, []);
  
  const  loadImagesFromStorage = async () => {
    const storedImages = await AsyncStorage.getItem('postedImages');
    if (storedImages) { 
      try {
        setImages(JSON.parse(storedImages));
      } catch (error) {
        console.error('Error parsing stored images:', error);
      }
    } 
  };

  const handleDelete = async  (index) => {
    try {
      const updatedImages = images.filter((_, i) => i !== index);
      await AsyncStorage.setItem('postedImages', JSON.stringify(updatedImages));
      setImages(updatedImages);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };
  const handleLogout = async () => { 
    try {
      
      await AsyncStorage.setItem('user_logged_out', 'true');
      console.log('Logged out successfully');
  
      
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  

  return (
    <View style={styles.container}>   
        <View style={styles.header}>
          <View style={styles.imagelogo}>
            <Image source={require('../assests/hubbletech.png')} style={{height:"100%",width:'100%'}}/>
          </View>
          <View style={styles.postbutton}>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate('Post');
        }}
        style={{backgroundColor:'#3BA1FB',width:'80%',height:'30%',justifyContent:'center',alignItems:"center",borderRadius:5,marginBottom:10}}
      >
        <Text style={{ color: 'white',fontSize:20 }}>Add Post</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        style={{backgroundColor:'#3BA1FB',width:'80%',height:'30%',justifyContent:'center',alignItems:"center",borderRadius:5}}
      >
        <Text style={{ color: 'white',fontSize:20 }}>Logout</Text> 
      </TouchableOpacity>
       
            
          </View>
        </View>
       
      <ScrollView showsVerticalScrollIndicator={false} >
        {images.map((imageUri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDelete(index)}
            >
              <Text style={{color:'black'}}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"black"
    
  },
  imageContainer: {
    marginBottom: 10,
    alignItems: 'center', 
    marginTop:10,
    borderWidth:2,
    borderColor:"white",
    borderRadius:5
     
   
  },
  image:{ 
    width: 270, 
    height: 240,
    marginBottom: 5,
  },
  button: {
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginVertical: 3,
  },
  header:{
    height:120,
    backgroundColor:'black',
    flexDirection:'row',
    marginBottom:20,
    borderBottomColor:'white',
    borderWidth:1  
  },
  imagelogo: {
    height:'100%',
    width:'70%',
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
  postbutton: {
    width:'30%',
    height:'100%',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center'
  },
 
});

export default Home;
  