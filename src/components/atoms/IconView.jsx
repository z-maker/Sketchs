import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { ColorProvider } from '../../styles'

export default function IconView(props) {

    const {iconProps} = props

    const getColor = (props) => {
        const {light, primary, primaryDark, accent} = props
        
        if(light)return ColorProvider.scheme.iconLight

        if(primary)return ColorProvider.scheme.iconPrimary

        if(primaryDark)return ColorProvider.scheme.iconPrimaryDark

        if(accent)return ColorProvider.scheme.iconAccent
    }

    return (
        <Icon {...iconProps}  color={getColor(props)} />
    )
}

const styles = StyleSheet.create({
    


})
