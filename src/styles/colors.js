import { useContext } from "react"
import { AppContext } from "../components/providers/ApplicationContext"

export const scheme = {
    accent:"#0080ff",
    primary:"#0080ff",
    primaryDark:"#0080ff",
    inputTextBackground:"#313131",
    inputTextHint:"#cecece",
    textColor:"#fff",
    backgroundColor:"#181818",
    INFO:"#0080ff",
    WARNING:"#FFBB33",
    ERROR:"#FF4444",
    SUCCESS:"#00C851",
    
}

export const lightColors = {
    
}


export const getDarkScheme = () =>{
    return scheme
}

export const getLightScheme = () =>{
    return lightColors
}