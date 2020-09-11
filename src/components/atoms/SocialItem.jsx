import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import TextView from './TextView'

export default function SocialItem(props) {

    const { iconProps, label, labelStyle } = props


    return (
        <View style={styles.container} > 
            <Icon {...iconProps} />
            <TextView h4 center {...labelStyle} >{label}</TextView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:4,
        alignItems:"center",
        justifyContent:"center"
    }
})
