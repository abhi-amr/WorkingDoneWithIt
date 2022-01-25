import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (

    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen}/> */}

    </Stack.Navigator>
)

export default AuthNavigator;