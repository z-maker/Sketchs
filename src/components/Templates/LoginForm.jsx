import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EditText from '../atoms/EditText'
import RoundedButton from '../atoms/RoundedButton'
import TextView from '../atoms/TextView'

export default function LoginForm() {
    return (
        <View style={styles.container}>
            <EditText hint={"email"} />
            <EditText hint="password" secureTextEntry />
            <RoundedButton title="Login" />
            <TextView center >OR</TextView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        width:"70%"
    }
})
