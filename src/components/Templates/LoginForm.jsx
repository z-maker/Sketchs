import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EditText from '../atoms/EditText'
import RoundedButton from '../atoms/RoundedButton'
import TextView from '../atoms/TextView'
import { ColorProvider, AppDimensions } from '../../styles'
import SimpleLink from '../atoms/SimpleLink'
import { useNavigation } from '@react-navigation/native'


export default function LoginForm() {

    const Nav = useNavigation()
    const [form, setform] = useState({})
    const [isLoading, setisLoading] = useState(false)

    const onTextChange = (key,text) =>{
        setform({...form,[key]:text})
    }

    const attemptRegister = async () => {

        setisLoading(true)
        setTimeout(()=>{
            setisLoading(false)
        },2000)
    }
    
    return (
        <View style={styles.container}>
            <EditText editable={!isLoading} hint={"email"} id="email" onChangeText={onTextChange}/>
            <EditText editable={!isLoading} hint="password" secureTextEntry id={"password"} onChangeText={onTextChange}/>
            <RoundedButton loading={isLoading} title="Sign in" onPress={attemptRegister} />
            <TextView center >OR</TextView>
            <TextView center ></TextView>
            <SimpleLink onPress={()=>Nav.navigate("register")}>
                <TextView center >Create an account</TextView>
            </SimpleLink>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        width:300
    }
})
