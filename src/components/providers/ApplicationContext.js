import React, { useState, useEffect, createContext } from 'react'

import * as firebase from 'firebase'
import {UserModel} from '../../services/model'

export const AppContext = createContext();

export const ApplicationContext = ({ children }) => {

    const [appContext, setAppContext] = useState({
        user_data: null,
        isLogged: false,
        isSet:false,
        theme: ""
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user=>{
            if(!appContext.isSet){
                const u = new UserModel.UserModel(user)
                setAppContext({...appContext,isSet:true,isLogged:user!==null,user_data:user?u:user})
            }
        })
    });

    return (
        <AppContext.Provider value={[appContext, setAppContext]}>
            {children}
        </AppContext.Provider>
    )
}