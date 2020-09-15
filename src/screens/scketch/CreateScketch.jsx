import React, { useState, useCallback, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderNav from '../../components/molecules/HeaderNav'
import { Icon, Button } from 'react-native-elements'
import { isEmpty } from "lodash";
import IconView from '../../components/atoms/IconView'
import RoundedButton from '../../components/atoms/RoundedButton'
import TextView from '../../components/atoms/TextView'
import SketchPicker from '../../components/molecules/SketchPicker'
import EditText from '../../components/atoms/EditText'
import { ColorProvider } from '../../styles'
import { AppContext } from '../../components/providers/ApplicationContext';
import { SketchModel } from '../../services/model';
import { useNavigation } from '@react-navigation/native';

export default function CreateScketch() {

    const [appContext] = useContext(AppContext)
    const Nav = useNavigation()

    const [form, setform] = useState({
        filePath: "",
        title: "",
        description: "",
        filename: ""
    })


    const callback = useCallback(
        (path, name) => {
            setform({ ...form, filename: name, filePath: path })
        },
        [form],
    )

    const onChange = (key, text) => {
        setform({ ...form, [key]: text })

    }

    const attemptCreate = async () => {

        if (isEmpty(form.title)) {
            return null
        }
        if (isEmpty(form.filePath)) {
            return null
        }

        const sketch = {
            ...form,
            name:form.title,
            owner: {
                uid: appContext.user_data.uid,
                name: appContext.user_data.username,
                avatar: appContext.user_data.avatar,
            }
        }


        const res = await SketchModel.create(sketch)
        
        if(res){
            setform({})
            Nav.goBack()
        }

    }

    return (
        <View style={styles.container}>
            <HeaderNav
                leftComponent={
                    <IconView light iconProps={{ name: "chevron-left", type: "font-awesome-5" }} />
                }
                centerComponent={
                    <TextView light title >Create sketch</TextView>
                }
            // rightComponent={
            //     <RoundedButton title="Next" />
            // }
            />
            <SketchPicker callback={callback} />
            <View style={styles.form}>
                <EditText hint="Title" id="title"
                    onChangeText={onChange} />
                <EditText hint="Description" id="description"
                    onChangeText={onChange} />
                <RoundedButton title="Create" onPress={attemptCreate} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorProvider.scheme.backgroundColor
    },
    form: {
        alignSelf: "center",
        width: "80%"
    }
})
