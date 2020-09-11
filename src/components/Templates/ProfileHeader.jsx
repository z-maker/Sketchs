import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ColorProvider, Spacing } from '../../styles'
import { Avatar } from 'react-native-elements'
import TextView from '../atoms/TextView'
import { AppContext } from '../providers/ApplicationContext'

export default function ProfileHeader() {

    const [appContext, setappContext] = useContext(AppContext)
    const { user_data } = appContext
    console.log(user_data);
    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <Avatar source={require('../../../assets/icon.png')} size="xlarge" rounded />
                <TextView h4 center >{user_data.name ? user_data.name : user_data.email}</TextView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        width:"100%",
    },  
    container: {
        backgroundColor: ColorProvider.scheme.INFO,
        height: 250,
        width: "100%",
        alignItems: "center",
        paddingVertical: 30,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        elevation:6
    }
})
