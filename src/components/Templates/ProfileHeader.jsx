import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ColorProvider, Spacing } from '../../styles'
import { Avatar } from 'react-native-elements'
import TextView from '../atoms/TextView'
import { AppContext } from '../providers/ApplicationContext'
import SocialItem from '../atoms/SocialItem'
import AvatarPicker from '../molecules/AvatarPicker'

export default function ProfileHeader() {

    const [appContext, setappContext] = useContext(AppContext)
    const { user_data } = appContext

    console.log(user_data);
    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <AvatarPicker
                    avatarProps={{
                        style: styles.profilePic,
                        source:(user_data.avatar?{uri:user_data.avatar}:require('../../../assets/icon.png'))
                    }}
                    callback={(uri)=>{
                        user_data.avatar = uri
                        setappContext({...appContext,user_data:user_data})
                    }}
                />
                <TextView light  >{user_data.name ? user_data.name : user_data.email}</TextView>
            </View>
            <SocialItem
                containerStyle={{
                    position: "absolute",
                    right: 42,
                    bottom: 0
                }}
                iconProps={
                    {
                        name: "heart",
                        type: "font-awesome-5",
                        color: "red",
                        iconStyle: { fontSize: 42 }
                    }}
                label="45K" labelStyle={{ style: { color: "red" } }} />
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        width: "100%",
    },
    container: {
        backgroundColor: ColorProvider.scheme.primaryDark,
        height: 250,
        width: "85%",
        alignItems: "flex-start",
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderBottomRightRadius: 1000,
        borderEndColor: ColorProvider.scheme.primary,
        borderEndWidth: 15,
        elevation: 6
    },
    profilePic: {
        resizeMode: "cover",
        width: 120,
        height: 120,
        borderRadius: 500,
        borderWidth: 1,
        borderColor: ColorProvider.scheme.accent,
        marginBottom: 20
    }
})
