import React, { useContext } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { AppDimensions, ColorProvider, Typography, Spacing } from '../../styles'
import { AppContext } from '../providers/ApplicationContext'

export default function EditText(props) {

    const { half, full, onChangeText, id, value, hint, secureTextEntry } = props

    const onTextChange = (text) => {
        if (onChangeText) onChangeText(id, text)
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInputStyle}
                key={id}
                value={value}
                placeholder={hint}
                {...props}
                onChangeText={onTextChange}
                placeholderTextColor={ColorProvider.scheme.inputTextHint}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorProvider.scheme.inputTextBackground,
        
        borderBottomColor:ColorProvider.scheme.accent,
        borderTopColor:ColorProvider.scheme.accent,
        borderLeftColor:ColorProvider.scheme.accent,
        borderRightColor:ColorProvider.scheme.accent,
        
        borderBottomRightRadius:AppDimensions.INPUT_TEXT_RADIUS,
        borderBottomLeftRadius:AppDimensions.INPUT_TEXT_RADIUS,
        borderTopLeftRadius:AppDimensions.INPUT_TEXT_RADIUS,
        borderTopRightRadius:AppDimensions.INPUT_TEXT_RADIUS,
        
        

        borderWidth:1,
        elevation: AppDimensions.INPUT_ELEVATION,
        marginVertical:Spacing.VERTICAL_MARGIN
    },
    textInputStyle: {
        width: "100%",
        margin: 10,
        marginHorizontal: 20,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        color: ColorProvider.scheme.textColor,
    }
})
