import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PatientHomeScreen = ({ route }) => {
  const { userid } = route.params;
  const navigation = useNavigation();

  const [patientDetails, setPatientDetails] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    fetchPatientDetails(userid);
    fetchUserImage(userid); // Call function to fetch user image
  }, []);

  const fetchPatientDetails = async (userid) => {
    try {
      const response = await fetch(`http://192.168.180.141/bhanu/fetch_user_details.php?userId=${userid}`);
      const data = await response.json();
      
      if (data.details) {
        setPatientDetails(data.details);
      } else {
        console.error('Error fetching patient details:', data.message);
      }
    } catch (error) {
      console.error('Error fetching patient details:', error);
    }
  };

  const fetchUserImage = async (userid) => {
    try {
      const response = await fetch(`http://192.168.180.141/bhanu/retrieve.php?userId=${userid}`);
      
      // Check if the response is successful (status code 2xx)
      if (response.ok) {
        const data = await response.json();
        
        // Check if data.image is not an empty string
        if (data.image !== "") {
          setUserImage(data.image); // Set the user image state
        }
      } else {
        // Log error if response is not successful
        console.error('Failed to fetch user image. Status:', response.status);
      }
    } catch (error) {
      // Log any other errors that occur during the fetch
      console.error('Error fetching user image:', error);
    }
  };
  

  const handleBellIconPress = () => {
    navigation.navigate('MessageContainer', { userid });
  };

  const handleUploadImage = () => {
    navigation.navigate('ImageUpload', { userid });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.notificationIcon} onPress={handleBellIconPress}>
        <AntDesign name="bells" size={30} color="#0F5C69" />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
  {userImage ? (
    <Image source={{ uri: userImage }} style={styles.image} />
  ) : (
    <View style={styles.emptyImageContainer}>
      <AntDesign name="user" size={100} marginBottom={10} color="#0F5C69" />
    </View>
  )}
</View>


      {patientDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Patient Details:</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>Name          :      {patientDetails.name}</Text>
            <Text style={styles.detail}>PatientId     :      {patientDetails.userid}</Text>
            <Text style={styles.detail}>Gender        :      {patientDetails.gender}</Text>
            <Text style={styles.detail}>Address       :      {patientDetails.address}</Text>
            <Text style={styles.detail}>Mobile          :      {patientDetails.mobile}</Text>
            <Text style={styles.detail}>Age               :      {patientDetails.age}</Text>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleUploadImage}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  notificationIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  detailsContainer: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: '#008B8B',
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#BDCFCE",
    marginBottom: 30,
  },
  detail: {
    fontSize: 20,
    marginBottom: 20,
    color: "black"
  },
  imageContainer: {
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom:30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  emptyImageContainer: {
    marginTop: 20,
    marginBottom:40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#0F5C69',
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
});

export default PatientHomeScreen;