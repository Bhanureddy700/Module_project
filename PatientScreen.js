import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import React, { useState } from 'react';
import {
    Alert,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const PatientScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!userid || !password) {
      showAlert('User ID and password are required.');
      return;
    }

    const loginApiUrl = 'http://192.168.180.141/bhanu/signupconn.php';

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
          // Navigate to patient home screen upon successful login
          navigation.navigate('PatientHomeScreen', { userid});
        } else {
          showAlert('Login failed. Please try again.');
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
      resizeMode="cover"
    >
      <View style={styles.loginContainer}>

        <View style={styles.inputContainer}>
          <Image source={require('./images/LOGINPG.jpeg')} style={styles.profileImage} />
          <TextInput
            style={styles.input}
            placeholder="User ID"
            onChangeText={setUserid}
            value={userid}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10
  },
  inputContainer: {
    backgroundColor: '#fff', // Change this color as needed
    padding: 20,
    marginTop:30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  input: {
    height: 40,
    width: 300,
    marginTop:15,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#BDCFCE',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  button: {
    backgroundColor: '#0F5C69',
    padding: 12,
    marginTop: 5,
    borderRadius: 20,
    width: 100,
    marginLeft:100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  profileImage: {
    width: 200,
    height: 200,
    marginLeft:50,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PatientScreen;
