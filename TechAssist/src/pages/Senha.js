import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, SafeAreaView, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../firebaseConfig';  // Certifique-se de importar o `auth` corretamente
import { sendPasswordResetEmail } from 'firebase/auth';

export default function Senha({ navigation }) {
    const [email, setEmail] = useState('');

    const handlePasswordReset = async () => {
        if (!email) {
            Alert.alert("Erro", "Por favor, insira um e-mail válido.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            Alert.alert("Sucesso", "E-mail de redefinição de senha enviado com sucesso!");
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert("Erro", error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#1C1C1C" />
            <View style={styles.backContainer}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={36} color="#2A7B4D" />
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
                <Text style={styles.headerText}>Redefinir senha</Text>
            </View>

            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='white'
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.explica}>
                    Digite o seu e-mail no campo abaixo e lhe enviaremos um código para redefinição da senha.
                </Text>
                <TouchableOpacity style={styles.resetaButton} onPress={handlePasswordReset}>
                    <Text style={styles.resetaText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        width: '15%',
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
        gap: 50,
    },
    input: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 20,
        backgroundColor: '#343434',
        color: 'white',
    },
    explica: {
        width: '80%',
        fontSize: 18,
        color: '#b8b8b8',
    },
    resetaButton: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#2A7B4D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetaText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
