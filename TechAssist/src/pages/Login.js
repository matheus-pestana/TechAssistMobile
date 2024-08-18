import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.backContainer}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack(null)}>
                    <Ionicons name="arrow-back" size={36} color="#2A7B4D" />
                </TouchableOpacity>

            </View>

            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.headerText}>Login do usuário</Text>
            </View>

            <View style={styles.inputs}>

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='white'
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='white'
                    value={senha}
                    onChangeText={setSenha}
                />
                <TouchableOpacity style={styles.senhaButton} onPress={() => navigation.navigate('Senha')}>
                    <Text style={styles.senhaText}>Esqueci a senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logarButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logarText}>Continuar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        gap: 40,
    },

    backContainer: {
        margin: 10,
        width: '55px',
    },

    back: {
        borderRadius: 999,
        backgroundColor: '#373737',
        padding: 10,
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center',
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

    inputs: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
    },

    input: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#343434',
        color: 'white',
    },

    senhaButton: {
        width: '90%',
        margin: 10,
    },

    senhaText: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#2A7B4D',
    },

    logarButton: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#2A7B4D',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logarText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
