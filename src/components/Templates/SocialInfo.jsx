import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SocialItem from '../atoms/SocialItem'
import { ColorProvider } from '../../styles'

export default function SocialInfo() {
    return (
        <View style={styles.container}>
            <SocialItem iconProps={{name:"heart", type:"font-awesome-5",color:ColorProvider.scheme.accent}} label="45K" labelStyle={{accent:true}} />
            <SocialItem iconProps={{name:"heart", type:"font-awesome-5",color:ColorProvider.scheme.accent}} label="45K" labelStyle={{accent:true}} />
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
