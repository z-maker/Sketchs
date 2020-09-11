import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginStack from '../../navigations/stacks/LoginStack'
import { ColorProvider } from '../../styles'
import LoginForm from '../../components/Templates/LoginForm'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <LoginForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ColorProvider.scheme.backgroundColor
    }
})