import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DoctorRegistration = () => {
  const navigation = useNavigation();
  const [userid, setUserid] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);

  const handleRegistration = async () => {
    // Check if all fields are filled
    if (!userid || !name || !password || !confirmPassword || !mobile || !gender || !image) {
      Alert.alert("Please fill in all fields.");
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('userid', userid);
      formData.append('name', name);
      formData.append('password', password);
      formData.append('mobile', mobile);
      formData.append('gender', gender);
      formData.append('image', {
        uri: image,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
  
      const registrationResponse = await fetch('http://192.168.180.141/bhanu/dtsignup.php', {
        method: 'POST',
        body: formData,
      });
  
      const registrationData = await registrationResponse.json(); // Parse response as JSON
  
      if (registrationData.status === "success") {
        Alert.alert("Registration successful!");
        navigation.navigate('DoctorScreen');
  
        // Reset form fields and image
        setUserid('');
        setName('');
        setPassword('');
        setConfirmPassword('');
        setMobile('');
        setGender('');
        setImage(null);
      } else {
        Alert.alert(registrationData.message); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert("An error occurred. Please try again later.");
    }
  };
  

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

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagePickerContainer} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Ionicons name="image" size={Dimensions.get('window').width * 0.3} color="#CCCCCC" />
        )}
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          onChangeText={setUserid}
          value={userid}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          onChangeText={setMobile}
          value={mobile}
        />
        <View style={styles.genderContainer}>
          <Text style={styles.label}>Gender:</Text>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.selectedGender]}
            onPress={() => setGender('male')}
          >
            <Text style={styles.genderButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.selectedGender]}
            onPress={() => setGender('female')}
          >
            <Text style={styles.genderButtonText}>Female</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(232, 232, 232)',
  },
  imagePickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.35,
    height: Dimensions.get('window').width * 0.35,
    borderRadius: (Dimensions.get('window').width * 0.5) / 2,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2DC2D7',
    overflow: 'hidden',
    marginTop:20,
    marginBottom: 30,
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
  formContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 5,
    width: '100%',
    marginBottom: 240,
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#BDCFCE',
  },
  button: {
    backgroundColor: '#0F5C69',
    padding: 12,
    marginTop: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  genderButton: {
    backgroundColor: '#86AAB9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  genderButtonText: {
    color: '#fff',
  },
  selectedGender: {
    backgroundColor: '#0F5C69',
  },
});

export default DoctorRegistration;
