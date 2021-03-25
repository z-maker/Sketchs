import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SearchBar, Icon } from 'react-native-elements'
import { useState } from 'react'
import { ColorProvider } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { FirebaseDatabase } from '../../services/firebase'
import SketchItem from '../molecules/SketchItem'
import { FlatList } from 'react-native-gesture-handler'

export default function SketchPanel() {

    const Nav = useNavigation()

    const [search, setsearch] = useState("")

    const [list, setlist] = useState([])

    const updateSearch = (search) => {
        setsearch(search)
    }

    const getSketchList = async () => {
        const list = await FirebaseDatabase.listSketch()
        setlist(list)
    }

    useEffect(() => {

        getSketchList()
        
        return () => {

        }
    }, [])

    useEffect(() => {
        
        const s = FirebaseDatabase.listSketchListener((snap,ref)=>{
            setlist([...list,snap.toJSON()])
        })
        return () => {
            
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    containerStyle={{ flex: 1, backgroundColor: ColorProvider.scheme.backgroundColor }}
                    placeholder="Type Here..."
                    round
                    onChangeText={updateSearch}
                    value={search}
                />
                <Icon
                    onPress={() => Nav.navigate("sketch")}
                    color={ColorProvider.scheme.iconSeccondary}
                    name="plus"
                    type="font-awesome-5" containerStyle={{
                        margin: 20
                    }} />
            </View>
            <View style={{flex:1}} >
                <FlatList
                    style={{flex:1,width:"100%"}}
                    data={list}
                    renderItem={({item})=>(<SketchItem item={item} />)}
                    keyExtractor={(item)=>item.filename}
                >

                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})
