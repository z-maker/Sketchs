import React from 'react'
import { StyleSheet, View } from 'react-native'

import Toast from 'react-native-easy-toast';
import { ColorProvider, Typography } from '../../styles';

export const TOAST_TYPE = {
    WARNING: "warning",
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info"
}


export default function ToastView(props) {

    const { toastRef, position } = props

    return (
        <Toast
            {...props}
            ref={toastRef}
            position={position ? (position) : "bottom"}
            opacity={0.9}
            defaultCloseDelay={800}
            textStyle={{ color: ColorProvider.scheme.textColor, fontSize: Typography.FONT_SIZE_P }}
            style={toastStyle(props)} />
    )
}


const toastStyle = (props) => {
    const { type } = props
    return (
        type === "info" ? (styles.toastInfo) :
            type === "warning" ? (styles.toastWarning) :
                type === "error" ? (styles.toastError) :
                    type === "success" ? (styles.toastSuccess) :
                        styles.toast
    )
}


const styles = StyleSheet.create({
    toastInfo: {
        backgroundColor: ColorProvider.scheme.INFO
    },
    toastWarning: {
        backgroundColor: ColorProvider.scheme.WARNING
    },
    toastError: {
        backgroundColor: ColorProvider.scheme.ERROR
    },
    toastSuccess: {
        backgroundColor: ColorProvider.scheme.SUCCESS
    },
    toast: {
        backgroundColor: ColorProvider.scheme.ACCENT
    }
})
