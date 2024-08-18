import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Senha from '../pages/Senha';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function MyStack() {

    return (
        <Stack.Navigator
            InitialRouteName='Welcome'
            screenOptions={{
                
                headerShown: false,
            }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Senha" component={Senha} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
