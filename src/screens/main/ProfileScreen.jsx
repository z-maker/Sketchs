import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EditText from '../../components/atoms/EditText'
import LoginForm from '../../components/Templates/LoginForm'
import { ColorProvider } from '../../styles'
import ProfileHeader from '../../components/Templates/ProfileHeader'
import SocialItem from '../../components/atoms/SocialItem'
import SocialInfo from '../../components/Templates/SocialInfo'

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ProfileHeader />
            <SocialInfo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    }
})
