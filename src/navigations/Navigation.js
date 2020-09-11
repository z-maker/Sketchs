import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabStack from './stacks/TabStack';
import LoginStack from './stacks/LoginStack';
import { AppContext } from '../components/providers/ApplicationContext';

export default function Navigation() {

    const [appContext, setappContext] = useContext(AppContext)

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                {!appContext.isLogged &&
                    <Stack.Screen name="splash" component={LoginStack} />
                }
                {appContext.isLogged &&
                    <Stack.Screen name="main" component={TabStack} />
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})