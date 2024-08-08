import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userid: doctorid } = route.params || {}; // Get the doctorid from route params

  const [userid, setUserid] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [doctorId, setDoctorId] = useState(''); // New state for doctorId

  // Autofill the doctorId with doctorid if available
  useEffect(() => {
    if (doctorid) {
      setDoctorId(doctorid);
    }
  }, [doctorid]);

  const handleRegistration = async () => {
    // Check if all fields are filled
    if (!userid || !name || !password || !confirmPassword || !mobile || !age || !gender || !address || !doctorId) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      // Check if userid already exists in the login1 table
      const response = await fetch(`http://192.168.180.141/bhanu/signupconn.php?userid=${userid}`);
      const data = await response.json();
      
      if (data.exists) {
        alert("User ID already exists.");
        return;
      }
  
      // Create an object containing registration data
      const userData = {
        userid,
        name,
        password,
        mobile,
        age,
        gender,
        address,
        doctorId // Include doctorId in the registration data
      };
  
      // Send registration data to the server
      const registrationResponse = await fetch('http://192.168.180.141/bhanu/signupconn.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      const registrationData = await registrationResponse.text();
      console.log(registrationData); // Log the response from the PHP file
      alert("Registration successful! ");
      
  
      // Reset form fields
      setUserid('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setMobile('');
      setAge('');
      setGender('');
      setAddress('');
      setDoctorId(''); // Reset doctorId
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    }
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('./images/signup.jpg')} style={styles.profileImage} />
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
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
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
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={setAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          placeholder="Doctor ID"
          onChangeText={setDoctorId}
          value={doctorId}
        />
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
    backgroundColor: 'rgba(124, 160, 185, 0.5)',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    marginTop: 10, // Move the image slightly down
  },
  formContainer: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 20,
    marginBottom: 5,
    width: '80%',
    marginBottom:240,
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
  medicationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  medicationButton: {
    backgroundColor: '#86AAB9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  medicationButtonText: {
    color: '#fff',
  },
  selectedMedication: {
    backgroundColor: '#181002',
  },
});

export default RegistrationScreen;
