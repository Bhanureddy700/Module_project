import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { userid } = route.params;
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Add a flag to track whether the component is mounted

    // Fetch user details from the PHP endpoint with userId
    fetch(`http://192.168.180.141/bhanu/profile.php?userId=${userid}`)
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setUserDetails(data);
          setLoading(false);
        }
      })
      .catch(error => console.error('Error fetching user details:', error));

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [userid]);

  const handleLogout = () => {
    navigation.navigate('DoctorScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <MaterialCommunityIcons name="logout" size={30} color="red" />
      </TouchableOpacity>

      {/* Display profile image */}
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        userDetails && (
          <Image source={{ uri: userDetails.image }} style={styles.profileImage} />
        )
      )}

      <View style={styles.profileBox}>
        <Text style={styles.title}>User Profile</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          userDetails && (
            <>
              <Text style={styles.detail}>UserID         :      {userid}</Text>
              <Text style={styles.detail}>Name          :      {userDetails.name}</Text>
              <Text style={styles.detail}>Mobile         :      {userDetails.mobile}</Text>
              <Text style={styles.detail}>Gender        :      {userDetails.gender}</Text>
            </>
          )
        )}
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
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 60,
  },
  logoutButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  profileBox: {
    backgroundColor: '#BDCFCE',
    width: 300,
    padding: 20,
    borderWidth: 5,
    borderColor: '#BDCFCE',
    borderRadius: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  detail: {
    marginLeft: 10,
    width: 280,
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
  },
});

export default ProfileScreen;
