import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { ColorProvider } from '../../styles'

import * as DocumentPicker from 'expo-document-picker';
import { UserModel } from '../../services/model';

export default function AvatarPicker(props) {

    const { avatarProps, callback } = props

    const pickPicture = async () => {

        await DocumentPicker.getDocumentAsync({ type: "image/*" }).then(async (result) => {
            const { type, uri, name, size } = result
            if (type === "success") {
                const new_uri = await UserModel.updateAvatar(uri,name)
                if (callback) callback(new_uri)
            }
        })
    }

    return (
        <View>
            <Image  {...avatarProps} />
            <Icon
                onPress={pickPicture}
                name="edit" color={ColorProvider.scheme.textColor}
                containerStyle={styles.iconCont} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconCont: {
        backgroundColor: ColorProvider.scheme.accent,
        position: "absolute",
        bottom: 15,
        right: 6,
        padding: 4,
        borderRadius: 100

    }
})
