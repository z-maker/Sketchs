import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Typography } from '../../styles'

export default function TextView(props) {

    return (
        <Text style={getTextStyle(props)} {...props} >{props.children}</Text>
    )
}

const getTextStyle = (props) => {

    const {center,left,right, justify} = props

    if(center)return StyleSheet.flatten([styles.textCenter,styles.text])
    if(left)return StyleSheet.flatten([styles.textLeft,styles.text])
    if(right)return StyleSheet.flatten([styles.textRight,styles.text])
    if(justify)return StyleSheet.flatten([styles.textJustify,styles.text])

    return styles.text
}

const styles = StyleSheet.create({
    text:{
        fontFamily:Typography.FONT_FAMILY_REGULAR
    },
    textCenter:{
        textAlign:"center"
    },
    textLeft:{
        textAlign:"left"
    },
    textRight:{
        textAlign:"right"
    },
    textJustify:{
        textAlign:"justify"
    }
})
