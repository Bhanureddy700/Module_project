import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ImageUpload = ({ route }) => {
  const { userid } = route.params;
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log('Image picker result:', result);

      if (!result.cancelled && result.assets.length > 0 && result.assets[0].uri) {
        setImage(result.assets[0].uri);
      } else {
        console.log('Image selection canceled or failed.');
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      Alert.alert('Please select an image.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('image', {
        uri: image,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
  
      const response = await fetch('http://192.168.180.141/bhanu/patientimage.php', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const responseData = await response.json();o
      console.log(responseData);
  
      if (responseData.success) {
        Alert.alert('Image uploaded successfully!');
      } else {
        Alert.alert('Failed to upload image: ' + responseData.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('An error occurred while uploading image.');
    }
  };
  
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagePickerContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Ionicons name="image" size={Dimensions.get('window').width * 0.5} color="#CCCCCC" />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDF5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderRadius: (Dimensions.get('window').width * 0.5) / 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2DC2D7',
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  uploadText: {
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '700',
    color: '#000000',
  },
  uploadButton: {
    backgroundColor: '#0F5C69',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageUpload;
