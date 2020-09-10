import { useContext } from "react"
import { AppContext } from "../components/providers/ApplicationContext"

export const scheme = {
    accent:"#ff8000",
    primary:"#ff8000",
    primaryDark:"#ff8000",
    inputTextBackground:"#1d1d1d",
    inputTextHint:"#cecece",
    textColor:"#fff",
    backgroundColor:"#000"
    
}

export const lightColors = {
    
}


export const getDarkScheme = () =>{
    return scheme
}

export const getLightScheme = () =>{
    return lightColors
}