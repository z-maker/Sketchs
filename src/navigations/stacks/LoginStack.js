import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from '../../components/Templates/LoginForm'
import LoginScreen from '../../screens/login/LoginScreen'
import RegisterScreen from '../../screens/login/RegisterScreen'


const Stack = createStackNavigator()

export default function LoginStack() {
    return (
        <Stack.Navigator initialRouteName="login" headerMode="none">
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
