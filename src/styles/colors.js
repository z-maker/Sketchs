import { useContext } from "react"
import { AppContext } from "../components/providers/ApplicationContext"

export const scheme = {
    accent:"#ff6600",
    primary:"#00ccff",
    primaryDark:"#00aad4",
    inputTextBackground:"#1d1d1d",
    inputTextHint:"#cecece",
    textColor:"#fff",
    backgroundColor:"#1d1d1d",
    black:"#000",
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