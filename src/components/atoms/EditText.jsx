import React, { useContext } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AppDimensions, ColorProvider, Typography, Spacing } from '../../styles'
import { AppContext } from '../providers/ApplicationContext'

export default function EditText(props) {

    const { half, full, onChangeText, key, value, hint, secureTextEntry } = props

    const onTextChange = (text) => {
        if (onChangeText) onChangeText(key, text)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInputStyle}
                key={key}
                value={value}
                placeholder={hint}
                {...props}
                onChangeText={onTextChange}
                placeholderTextColor={ColorProvider.darkColors.inputTextHint}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorProvider.darkColors.inputTextBackground,
        borderRadius: AppDimensions.INPUT_TEXT_RADIUS,
        elevation: AppDimensions.INPUT_ELEVATION,
        marginVertical:Spacing.VERTICAL_MARGIN
    },
    textInputStyle: {
        width: "100%",
        margin: 10,
        marginHorizontal: 20,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        color: ColorProvider.darkColors.textColor,
    }
})
