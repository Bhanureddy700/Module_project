import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ route }) => {
  const { userid } = route.params;
  const navigation = useNavigation();

  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers();
  }, []);

  const fetchTopUsers = async () => {
    try {
      const response = await axios.get('http://192.168.180.141/bhanu/search.php');
      if (Array.isArray(response.data)) {
        setTopUsers(response.data);
      }
    } catch (error) {
      console.error('Error fetching top users:', error);
    }
  };

  const handleViewAll = () => {
    navigation.navigate('viewall', { userid });
  };

  const handleUserIdClick = (selectedUserId) => {
    // Handle navigation to other page with the selected user ID
    navigation.navigate('OtherPage', { userId: selectedUserId });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images/download.jpg')} style={styles.image} />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
      {topUsers.map((user, index) => (
    <TouchableOpacity key={index} onPress={() => handleUserIdClick(user.userid)}>
      <View style={styles.userIdContainer}>
        {/* Check if the user has an image */}
        {user.image ? (
          <Image source={{ uri: user.image }} style={styles.userImage} />
        ) : (
          <Ionicons name="person" size={50} color="#0F5C69" style={styles.profileIcon} />
        )}
        <Text style={styles.userId}>      {user.userid}</Text>
      </View>
    </TouchableOpacity>
  ))}
      </ScrollView>
      <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAll}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', { userid })}>
          <Ionicons name="person" size={30} color="#0F5C69" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegistrationScreen',{userid})}>
          <MaterialCommunityIcons name="account-plus" size={40} color="#0F5C69" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NewRecordScreen')}>
          <Ionicons name="flask" size={30} color="#0F5C69" />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(232, 232, 232)',
    paddingBottom: 20,
  },
  image: {
    marginTop: 30,
    width: 300,
    height: 200,
    borderRadius: 30,
    marginBottom: 150,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  scrollView: {
    height: 350, // Set the desired height
    width: '80%', // Set the desired width
    borderRadius: 20,
    top:-90,
    backgroundColor:"#BDCFCE",
    borderWidth: 2,
    borderColor: '#BDCFCE',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  scrollViewContent: {
    top:3,
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  profileIcon: {
    marginRight: 10,
  },
  userIdContainer: {
    flexDirection: 'row', // Adjusted to align items horizontally
    alignItems: 'center', // Center items vertically
    borderRadius: 10,
    paddingVertical: 10, // Reduced padding for better alignment
    paddingHorizontal: 20, // Adjusted padding for better spacing
    marginBottom: 10,
    width: '100%', // Adjusted width to fit the entire screen
    height: 70,
    backgroundColor: '#FFF', // Different background color for each user ID container
    marginBottom: 10,
    width:220,
    height:70
  },
  userId: {
    fontSize: 18,
  },
  viewAllButton: {
    position: 'absolute',
    bottom: 137,
    right: 40,
    backgroundColor: '#0F5C69',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 2, // Shadow radius
    elevation: 5, //
  },
  viewAllText: {
    color: 'white',
    fontSize: 13,
  },
});

export default Home;
