import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ViewDoctorScreen = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newDoctor, setNewDoctor] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://192.168.180.141/bhanu/retrieve_doctors.php');
      if (Array.isArray(response.data)) {
        setDoctors(response.data);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const handleAddDoctor = async () => {
    if (newDoctor.trim()) {
      try {
        const response = await axios.post('http://192.168.180.141/bhanu/add_doctor.php', {
          doctorName: newDoctor
        });
        if (response.data.success) {
          Alert.alert('Success', 'Doctor added successfully');
          setNewDoctor('');
          fetchDoctors(); // Refresh the list
        } else {
          Alert.alert('Error', 'Failed to add doctor');
        }
      } catch (error) {
        console.error('Error adding doctor:', error);
        Alert.alert('Error', 'Failed to add doctor');
      }
    } else {
      Alert.alert('Error', 'Please enter a doctor name');
    }
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.DTID.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search doctors..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {filteredDoctors.map((doctor, index) => (
          <View key={index} style={styles.doctorContainer}>
            <Text style={styles.doctorId}>{doctor.DTID}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.addDoctorContainer}>
        <TextInput
          style={styles.addDoctorInput}
          placeholder="Add Doctor ID"
          value={newDoctor}
          onChangeText={(text) => setNewDoctor(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddDoctor}>
          <Ionicons name="add-circle" size={60} color="#0F5C69" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'rgb(232, 232, 232)',
  },
  searchBar: {
    width: '80%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  scrollView: {
    width: '80%',
    flex: 1, // Allow the ScrollView to take up available space
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  doctorContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
  },
  doctorId: {
    fontSize: 18,
  },
  addDoctorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft:30,
    marginBottom:10
  },
  addDoctorInput: {
    height: 50,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    width: 220,
    marginRight: 0,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewDoctorScreen;
