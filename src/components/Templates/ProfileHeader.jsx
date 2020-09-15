import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ColorProvider, Spacing } from '../../styles'
import { Avatar, Icon } from 'react-native-elements'
import TextView from '../atoms/TextView'
import { AppContext } from '../providers/ApplicationContext'
import SocialItem from '../atoms/SocialItem'
import AvatarPicker from '../molecules/AvatarPicker'

export default function ProfileHeader() {

    const [appContext, setappContext] = useContext(AppContext)
    const { user_data } = appContext

    const [isFull, setisFull] = useState(false)

    return (

        <>
            {!isFull &&
                <View style={contractStyles.container}>
                    <View style={contractStyles.left} >
                        <Avatar rounded size="medium"
                            onPress={() => setisFull(true)}
                            source={{ uri: user_data.avatar }} />
                    </View>
                    <View style={contractStyles.center} >
                        <TextView light center>
                            {user_data.name ? user_data.name : user_data.email}</TextView>
                    </View>
                    <View style={contractStyles.right} >
                        <Icon name="player-settings" type="fontisto"
                            iconStyle={{ fontSize: 28 }}
                            color={ColorProvider.scheme.iconPrimary} />
                    </View>
                </View>
            }

            {isFull &&
                <View style={styles.parent}>

                    <SocialItem
                        containerStyle={{
                            position: "absolute",
                            right: "5%",
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

                    <Icon
                        containerStyle={{
                            position: "absolute",
                            right: "5%",
                            top: 28,
                            zIndex: 99999
                        }}
                        name="player-settings" type="fontisto"
                        iconStyle={{ fontSize: 28 }}
                        color={ColorProvider.scheme.iconPrimary} />

                    <Icon
                        containerStyle={{
                            position: "absolute",
                            left: "5%",
                            top: 28,
                            zIndex: 99999
                        }}
                        onPress={()=>setisFull(false)}
                        name="angle-up" type="fontisto"
                        iconStyle={{ fontSize: 28 }}
                        color={ColorProvider.scheme.iconPrimary} />




                    <View style={styles.container}>
                        <AvatarPicker
                            avatarProps={{
                                style: styles.profilePic,
                                source: (user_data.avatar ? { uri: user_data.avatar } : require('../../../assets/icon.png'))
                            }}
                            callback={(uri) => {
                                user_data.avatar = uri
                                setappContext({ ...appContext, user_data: user_data })
                            }}
                        />
                        <View style={styles.infoContent}>
                            <TextView light  >{user_data.name ? user_data.name : user_data.email}</TextView>
                        </View>
                    </View>
                </View>
            }

        </>


    )
}

const contractStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 82,
        paddingTop: 24,
        paddingHorizontal: "3%",
        flexDirection: "row",
        backgroundColor: ColorProvider.scheme.primaryDark
    },
    left: {
        justifyContent: "center",
    },
    center: {
        flex: 1,
        justifyContent: "center"
    },
    right: {
        justifyContent: "center"
    }
})

const styles = StyleSheet.create({
    parent: {
        width: "100%",
    },
    container: {
        flexDirection: "row",
        backgroundColor: ColorProvider.scheme.primaryDark,
        height: 250,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 30,
        paddingTop: 60,
        paddingHorizontal: 20,
        borderBottomRightRadius: 700,
        borderEndColor: ColorProvider.scheme.primary,
        borderEndWidth: 15,
        zIndex: 0
    },
    infoContent: {
        flexDirection: "column",
        height: "50%",
        marginHorizontal: 16,
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
