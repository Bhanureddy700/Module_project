import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./images/get.jpg')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('MyScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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
  welcomeContainer: {
    width: '80%', // Width as percentage for responsiveness
    alignItems: 'center',
    marginBottom: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    width: '60%', // Width as percentage for responsiveness
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: '100%', // Image takes full width of the container
    height: undefined,
    aspectRatio: 1, // Ensures the image maintains a square shape
    borderRadius: 120,
    backgroundColor: '#ccc', // Placeholder background color
  },
  getStartedButton: {
    width: '70%', // Width as percentage for responsiveness
    marginTop: 10,
    backgroundColor: '#0F5C69',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.7,
  },
});

export default GetStarted;
