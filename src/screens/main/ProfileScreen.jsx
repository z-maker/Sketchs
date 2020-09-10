import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EditText from '../../components/atoms/EditText'
import LoginForm from '../../components/Templates/LoginForm'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            
            <LoginForm />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
