import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { Typography, ColorProvider } from '../../styles'

export default function TextView(props) {

    return (
        <Text  style={getTextStyle(props)} {...props} >{props.children}</Text>
    )
}

const getTextStyle = (props) => {

    const align = getTextAlign(props)
    const tcolot = getTextColor(props)
    const fsize =  getFontSize(props)

    return StyleSheet.flatten([styles.text,align,tcolot,fsize])

}

const getFontSize = (props) => {
    const {title, subTitle, content} = props

    if(title)return fontStyles.title
    if(subTitle)return fontStyles.subTitle
    if(content)return fontStyles.content
}

const getTextAlign = (props) => {
    const { center, left, right, justify } = props

    if (center) return styles.textCenter
    if (left) return styles.textCenter
    if (right) return styles.textCenter
    if (justify) return styles.textCenter

    return styles.text
}

const getTextColor = (props) => {
    const { primary, accent, light, dark } = props

    if (primary) return colorStyles.primary
    if (accent) return colorStyles.accent
    if (light) return colorStyles.light
    if (dark) return colorStyles.dark

    return styles.text
}

const colorStyles = StyleSheet.create({
    primary: {
        color: ColorProvider.scheme.primary
    },
    accent: {
        color: ColorProvider.scheme.accent
    },
    light: {
        color: ColorProvider.scheme.textColor
    },
    dark: {
        color: ColorProvider.scheme.backgroundColor
    }
})

const styles = StyleSheet.create({
    text: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
    },
    textCenter: {
        textAlign: "center"
    },
    textLeft: {
        textAlign: "left"
    },
    textRight: {
        textAlign: "right"
    },
    textJustify: {
        textAlign: "justify"
    }
})

const fontStyles = StyleSheet.create({
    title:{
        fontSize:Typography.FONT_SIZE_H1
    },
    subTitle:{
        fontSize:Typography.FONT_SIZE_H4
    },
    content:{
        fontSize:Typography.FONT_SIZE_P
    }
})