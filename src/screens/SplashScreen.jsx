import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text>asd</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
