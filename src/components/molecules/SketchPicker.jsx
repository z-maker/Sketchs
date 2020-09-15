import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Image } from 'react-native-elements'

import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';
import TextView from '../atoms/TextView';
import EditText from '../atoms/EditText';

export default function SketchPicker(props) {

    const { callback, edit, source } = props

    const [image, setimage] = useState(source ? { uri: source } : require('../../../assets/icon.png'))

    const pickPicture = async () => {

        await DocumentPicker.getDocumentAsync({ type: "image/*" }).then(async (result) => {
            const { type, uri, name, size } = result
            if (type === "success") {
                setimage({ uri: uri })
                if (callback) callback(uri,name)
            }
        })
    }

    return (
        <TouchableHighlight onPress={pickPicture}>
            <Image style={{ width: "100%", height: 200 }}
                resizeMode="center"
                source={image} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    
})
