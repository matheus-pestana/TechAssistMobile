import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, SafeAreaView, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const handleSignUp = async () => {
        if (senha !== confirmaSenha) {
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                nome: nome,
                email: email,
            });

            Alert.alert("Sucesso", "Conta criada com sucesso!");

            setNome('');
            setEmail('');
            setSenha('');
            setConfirmaSenha('');

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
                <Text style={styles.headerText}>Cadastro do usuário</Text>
            </View>

            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                    placeholderTextColor='white'
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor='white'
                    value={email}
                    onChangeText={setEmail}
                    inputMode='email'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='white'
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirme sua senha'
                    placeholderTextColor='white'
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C',
        gap: 20,
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
        gap: 20,
    },
    input: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 20,
        marginBottom: 10,
        backgroundColor: '#343434',
        color: 'white',
    },
    button: {
        width: '90%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#2A7B4D',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
