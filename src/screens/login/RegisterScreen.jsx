import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RegisterForm from '../../components/Templates/RegisterForm'
import { ColorProvider } from '../../styles'

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <RegisterForm/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:ColorProvider.scheme.backgroundColor
    }
})