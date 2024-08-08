import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Final = ({ route }) => {
  const { userid, message, dateTime} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setModalVisible(true);
    // Insert data into database
    sendDataToServer();
  }, []);

  const sendDataToServer = () => {
    axios.post(
      'http://192.168.180.141/bhanu/insert_message.php',
      {
        userid: userid,
        message: message,
        dateTime: dateTime
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data, headers) {
          return Object.keys(data).map(key =>
            encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
          ).join('&');
        }]
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  

  const handleOkPress = () => {
    setModalVisible(false);
    navigation.navigate('NewRecordScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/tic.jpg')} // Replace with the actual path
          style={styles.image}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <Text>Message sent successfully</Text>
            <TouchableOpacity
              style={styles.okButton}
              onPress={handleOkPress}
            >
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '80%',
    borderRadius: 20,
    aspectRatio: 1,
    marginBottom: 250,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  okButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  okButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Final;
