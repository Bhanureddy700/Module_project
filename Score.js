import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Score = ({ route }) => {
    const { userId } = route.params;
    const navigation = useNavigation(); // Initialize navigation

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableOpacity
                    style={styles.textButton}
                    onPress={() => navigation.navigate('History', { userId })}>
                    <Text style={[styles.buttonText, { color: '#fff' }]}>Section-A Score</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.textButton}
                    onPress={() => navigation.navigate('History1', { userId })}>
                    <Text style={[styles.buttonText, { color: '#fff' }]}>Section-B Score</Text>
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
    },
    contentContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    textButton: {
        backgroundColor: '#0F5C69', // Button color
        paddingVertical: 8,
        width: 110,
        height: 50,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 20, // Adjust spacing between buttons
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowOpacity: 1.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Score;
