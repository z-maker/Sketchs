import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginStack from '../../navigations/stacks/LoginStack'
import { ColorProvider } from '../../styles'
import LoginForm from '../../components/Templates/LoginForm'
import EditText from '../atoms/EditText'
import RoundedButton from '../atoms/RoundedButton'
import TextView from '../atoms/TextView'
import SimpleLink from '../atoms/SimpleLink'
import { useNavigation } from '@react-navigation/native'
import ToastView from '../atoms/ToastView'
import { Validators } from '../../utils'
import { FirebaseAuth } from '../../services/firebase'
import { UserModel } from '../../services/model'


export default function RegisterForm() {

    const Nav = useNavigation()

    const toastRef = useRef()

    const [form, setform] = useState({
        email: "zero66694@gmail.com",
        emailconfirm: "zero66694@gmail.com",
        password: "Admin123!",
        passwordconfirm: "Admin123!"
    })
    const [isLoading, setisLoading] = useState(false)

    const onTextChange = (key, text) => {
        setform({ ...form, [key]: text })
    }

    const attemptRegister = async () => {

        if (form.email === "" || form.emailconfirm === "" || form.password === "" || form.passwordconfirm === "") {
            toastRef.current.show("Please fill all fields")
            return null
        }

        if (!Validators.validateEmail(form.email)) {
            toastRef.current.show("email field is not valid")
            return null
        }
        if (!Validators.validateEmail(form.emailconfirm)) {
            toastRef.current.show("second email field is not valid")
            return null
        }

        if (form.email !== form.emailconfirm) {
            toastRef.current.show("email fields does not match")
            return null
        }

        if (form.password.length < 6) {
            toastRef.current.show("password is too short")
            return null
        }

        if (form.password !== form.password) {
            toastRef.current.show("email fields does not match")
            return null
        }

        setisLoading(true)

        const user = await UserModel.registerUser(form.email, form.password)
        
        if (!user) {
            toastRef.current.show("Email already in use")
            setisLoading(false)
            return null
        }

        
        console.log(user);

        setisLoading(false)
    }

    return (
        <View style={styles.container}>

            <EditText value={form.email} editable={!isLoading} hint={"email"} id="email" onChangeText={onTextChange} />
            <EditText value={form.emailconfirm} editable={!isLoading} hint={"confirm email"} id={"emailconfirm"} onChangeText={onTextChange} />
            <EditText value={form.password} editable={!isLoading} hint="password" secureTextEntry id={"password"} onChangeText={onTextChange} />
            <EditText value={form.passwordconfirm} editable={!isLoading} hint="confirm password" onChangeText={onTextChange} secureTextEntry id={"passwordconfirm"} />
            <RoundedButton loading={isLoading} title="Sign up" onPress={attemptRegister} />
            <TextView center >OR</TextView>
            <TextView center ></TextView>
            <SimpleLink onPress={() => Nav.goBack()}>
                <TextView center >I have an account</TextView>
            </SimpleLink>
            <ToastView type="info" position="center" toastRef={toastRef} />
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        width: 300
    }
})
