import React from 'react'
import { Image } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { Sketch } from '../../services/model/sketch_model'

const SketchItem = ({item}) => {

    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image  containerStyle={styles.image} source={{uri:item.thumb}} />
            </View>
            <View style={styles.body} >
                <Text>{item.description}</Text>
            </View>

        </View>
    )
}

export default SketchItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        overflow:"hidden"
    },
    imageContainer:{
        flex:1,
        backgroundColor:"black",
        width:"100%",
        alignItems:"center",
    },
    image:{
        flex:1,
        height:200,
        width:"100%",
    },
    body:{
        backgroundColor:"white",
        width:"100%",
        padding:20,
    }
})
