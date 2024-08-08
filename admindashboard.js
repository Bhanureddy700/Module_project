import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AdminDashboardScreen = () => {
  const navigation = useNavigation();
  
  const handleViewPatientScreen = () => {
    navigation.navigate('ViewDoctorScreen');
  };
  

  const handleViewDoctorScreen = () => {
    navigation.navigate('PatientDetails');
  };
 
  

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <TouchableOpacity style={styles.imageButton} onPress={handleViewPatientScreen}>
            <Image source={require('./images/medical.jpg')} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.text}>View Doctor</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.imageButton} onPress={handleViewDoctorScreen}>
            <Image source={require('./images/crowd.jpg')} style={styles.image} />
          </TouchableOpacity>
          
          <Text style={styles.text}>View Patient</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfdff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  imageButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 25
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  iconButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default AdminDashboardScreen;
