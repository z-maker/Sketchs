import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SocialItem from '../atoms/SocialItem'

export default function SocialInfo() {
    return (
        <View style={styles.container}>
            <SocialItem iconProps={{name:"heart", type:"font-awesome-5", color:"red"}} label="45K" labelStyle={{style:{color:"red"}}} />
            <SocialItem iconProps={{name:"heart", type:"font-awesome-5", color:"red"}} label="45K" labelStyle={{style:{color:"red"}}} />
            <SocialItem iconProps={{name:"heart", type:"font-awesome-5", color:"red"}} label="45K" labelStyle={{style:{color:"red"}}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        padding:10
    }
})
