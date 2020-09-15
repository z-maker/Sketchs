import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar, Icon } from 'react-native-elements'
import { useState } from 'react'
import { ColorProvider } from '../../styles'
import { useNavigation } from '@react-navigation/native'

export default function ScketchPanel() {

    const Nav = useNavigation()

    const [search, setsearch] = useState("")

    const updateSearch = (search) =>{
        setsearch(search)
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
            <SearchBar
                containerStyle={{flex:1,backgroundColor:ColorProvider.scheme.backgroundColor}}
                placeholder="Type Here..."
                round
                onChangeText={updateSearch}
                value={search}
            />
            <Icon 
            onPress={()=>Nav.navigate("sketch")}
            color={ColorProvider.scheme.iconSeccondary}
            name="plus" 
            type="font-awesome-5" containerStyle={{
                margin:20
            }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
    searchContainer:{
        flexDirection:"row",
        alignItems:"center"
    }
})
