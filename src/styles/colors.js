import { useContext } from "react"
import { AppContext } from "../components/providers/ApplicationContext"

export const darkColors = {
    accent:"#ff8000",
    primary:"#ff8000",
    primaryDark:"#ff8000",
    inputTextBackground:"#1d1d1d",
    inputTextHint:"#cecece",
    textColor:"#fff"
}

export const lightColors = {
    
}


export const getDarkScheme = () =>{
    return darkColors
}

export const getLightScheme = () =>{
    return lightColors
}