import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Display = ({ route }) => {
    const { userid, sum, sum1, message, dateTime } = route.params;
    const navigation = useNavigation();
  
    const manageType = sum < 32 && sum1 < 20 ? "Conservative Management" : "Surgery";
  
    const goToFinal = () => {
      navigation.navigate('Final', {
        userid: userid,
        sum: sum,
        sum1: sum1,
        message,
        dateTime
      });
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>User ID     :    {userid}</Text>
          <Text style={styles.text}>Score in Section-A      :     {sum}</Text>
          <Text style={styles.text}>Score in Section-A      :     {sum1}</Text>
          <Text style={styles.text}>Management Type   :  {manageType}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={goToFinal}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
    },
    content: {
      backgroundColor: '#E5E5E5',
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#0F5C69',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  
  export default Display;
  