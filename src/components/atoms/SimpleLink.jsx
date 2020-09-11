import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function SimpleLink(props) {
    return (
        <TouchableOpacity {...props} >
            {props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    }
})
