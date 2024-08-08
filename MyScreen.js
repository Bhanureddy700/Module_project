import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/admin.png')} style={styles.image} />
        </View>
        <TouchableOpacity
          style={styles.textButton}
          onPress={() => navigation.navigate('admin')}>
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/doctor.png')} style={styles.image} />
        </View>
        <TouchableOpacity
          style={styles.textButton}
          onPress={() => navigation.navigate('DoctorScreen')}>
          <Text style={styles.buttonText}>Doctor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('./images/patient.png')} style={styles.image} />
        </View>
        <TouchableOpacity
          style={styles.textButton}
          onPress={() => navigation.navigate('PatientScreen')}>
          <Text style={styles.buttonText}>Patient</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(232, 232, 232)',
    paddingHorizontal: 20, // Added padding for alignment
  },
  contentContainer: {
    width: '100%', // Full width of the screen
    alignItems: 'center',
    marginBottom: 30,
  },
  imageContainer: {
    width: '45%', // Width as percentage for responsiveness
    aspectRatio: 1, // Ensures the container is square
    borderRadius: 100, // Circular shape
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  image: {
    width: '70%', // Image takes 70% of the container's width
    height: undefined,
    aspectRatio: 1, // Ensures the image is square
    borderRadius: 50, // Circular shape
    resizeMode: 'cover',
    
  },
  textButton: {
    width: '45%', // Button width as percentage
    backgroundColor: '#0F5C69',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyScreen;
