import { useContext } from "react"
import { AppContext } from "../components/providers/ApplicationContext"

export const scheme = {
    accent:"#9E75A0",
    primary:"#5272A7",
    primaryDark:"#0D2854",
    inputTextBackground:"#313131",
    inputTextHint:"#cecece",
    textColor:"#fff",
    backgroundColor:"#181818",
    INFO:"#0080ff",
    WARNING:"#FFBB33",
    ERROR:"#FF4444",
    SUCCESS:"#00C851",

    iconLight:"#fff",
    iconPrimary:"#fff",
    iconPrimaryDark:"#fff",
    iconAccent:"#fff",
    iconSeccondary:"#fff"
    
}

export const lightColors = {
    
}


export const getDarkScheme = () =>{
    return scheme
}

export const getLightScheme = () =>{
    return lightColors
}