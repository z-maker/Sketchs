import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './stacks/TabStack';
import LoginStack from './stacks/LoginStack';
import { AppContext } from '../components/providers/ApplicationContext';
import SketchStack from './stacks/SketchStack';

export default function Navigation() {

    const [appContext, setappContext] = useContext(AppContext)

    const Stack = createStackNavigator()

    if (appContext.isLogged) {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="main" component={TabStack} />
                    <Stack.Screen name="sketch" component={SketchStack} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="splash" component={LoginStack} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }


}

const styles = StyleSheet.create({})