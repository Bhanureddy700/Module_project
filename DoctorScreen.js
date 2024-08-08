import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DoctorScreen = () => {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('DoctorRegistration');
  };

  const handleLogin = () => {
    if (!userid || !password) {
      showAlert('User ID and password are required.');
      return;
    }
    const loginApiUrl = 'http://192.168.180.141/bhanu/dtlogin.php';
    fetch(loginApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login Response:', data);
        if (data.status === 'success') {
          showAlert('Login successful!');
          setLoggedIn(true); 
          navigation.navigate('Home', { userid });
        } else {
          showAlert('Username and Password incorrect');
        }
      })
      .catch(error => {
        console.error('Login Error:', error);
        showAlert('Login failed. Please try again.');
      });
  };

  const showAlert = message => {
    Alert.alert('Status', message);
  };

  return (
    <ImageBackground
      style={[styles.backgroundImage, { backgroundColor: 'rgb(232, 232, 232)' }]}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image source={require('./images/LOGINPG.jpeg')} style={styles.profileImage} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="User ID"
              onChangeText={text => setUserid(text)}
              value={userid}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
              <Text style={styles.forgotPasswordText}>I don’t have an account?</Text>
              <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    width: '90%',
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: '5%',
    borderRadius: 20,
    width: '100%',
    marginTop: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: '5%',
    borderRadius: 15,
    paddingLeft: '5%',
    backgroundColor: '#BDCFCE',
    opacity: 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#0F5C69',
    paddingVertical: 12,
    paddingHorizontal: '10%',
    marginTop: '5%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#ccc',
    fontSize: 17,
    textAlign: 'center',
  },
  signUpText: {
    color: '#0F5C69',
    fontSize: 17,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  profileImage: {
    width: 150,
    height: 130,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
});

export default DoctorScreen;
