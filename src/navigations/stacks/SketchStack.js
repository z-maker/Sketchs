import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CreateScketch from '../../screens/scketch/CreateScketch'

export default function SketchStack() {

    const Stack = createStackNavigator()


    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="sketch_create" component={CreateScketch} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
