import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, SafeAreaView, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function Home({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                Alert.alert("Erro", error.message);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor="#1C1C1C"
            />
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.headerText}>Bem-vindo</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 350,
        height: 150,
        resizeMode: 'contain',
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logoutButton: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
