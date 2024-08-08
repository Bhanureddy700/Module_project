import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const History = ({ route, navigation }) => {
  const { userId } = route.params;
  const [dates, setDates] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`http://192.168.180.141/bhanu/getdates.php?userId=${userId}`)
      .then(response => response.json())
      .then(data => setDates(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleDatePress = (date) => {
    navigation.navigate('Response', { userId: userId, date: date });
  };

  const filteredDates = dates.filter(date => date.includes(searchQuery));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Date..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text style={styles.title}>Patien ID: {userId}</Text>
      {filteredDates.map(date => (
        <TouchableOpacity key={date} style={styles.dateContainer} onPress={() => handleDatePress(date)}>
          <Text>Test taken at :</Text>
          <Text style={styles.dateText}>{date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: 'rgb(232, 232, 232)',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateContainer: {
    backgroundColor: 'white',
    padding: 10,
    width: 250,
    height: 70,
    marginVertical: 5,
    borderRadius: 10,
  },
  dateText: {
    marginTop: 7,
    fontSize: 20, // Adjust the font size as needed
  },
  searchInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
});

export default History;
