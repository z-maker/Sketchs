import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './stacks/TabStack';

export default function Navigation() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="splash">
                <Stack.Screen name="splash" component={TabStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})