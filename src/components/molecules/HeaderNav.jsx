import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'
import { ColorProvider } from '../../styles'

export default function HeaderNav(props) {
    return (
        <Header {...props} backgroundColor={ColorProvider.scheme.primaryDark} />
    )
}

const styles = StyleSheet.create({})
