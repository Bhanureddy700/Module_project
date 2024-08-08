import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Animated, StyleSheet, Text, View } from 'react-native';

const MessageContainer = ({ route }) => {
  const { userid } = route.params;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    axios.get(`http://192.168.180.141/bhanu/get_messages.php?userid=${userid}`)
      .then(response => {
        console.log('API Response:', response.data);
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          setMessages([]);
        }
        setLoading(false);

        // Start fade-in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        Alert.alert('Error', 'Failed to fetch messages');
        setError(error);
        setLoading(false);
      });
  }, [userid, fadeAnim]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (messages.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No messages found for UserID: {userid}</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {messages.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
          <Text style={styles.title}>Patient ID: {message.userid}</Text>
          <Text style={styles.messageText}>{message.message}</Text>
          <Text style={styles.dateTimeText}>{message.dateTime}</Text>
        </View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContainer: {
    width: 300,
    height: 150,
    backgroundColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 18,
    marginTop: 10,
  },
  dateTimeText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default MessageContainer;
