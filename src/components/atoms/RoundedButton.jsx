import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { ColorProvider, AppDimensions, Spacing } from '../../styles'

export default function RoundedButton(props) {
    return (
        <Button buttonStyle={styles.buttonStyle} containerStyle={styles.containerStyle} raised buttonStyle={styles.buttonStyle} {...props} />
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        marginVertical:Spacing.VERTICAL_MARGIN
    },
    buttonStyle:{
        backgroundColor:ColorProvider.scheme.accent,
        borderRadius:AppDimensions.INPUT_TEXT_RADIUS
    }
})
