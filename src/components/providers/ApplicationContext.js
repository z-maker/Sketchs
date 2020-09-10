import React, { useState, useEffect, createContext } from 'react'

import * as firebase from 'firebase'
import { ColorProvider } from '../../styles';

export const AppContext = createContext();

export const ApplicationContext = ({ children }) => {

    const [appContext, setAppContext] = useState({
        user_data: null,
        isLogged: false,
        theme:ColorProvider.getDarkScheme()
    });

    useEffect(() => {
        
    });

    return (
        <AppContext.Provider value={[appContext, setAppContext]}>
            {children}
        </AppContext.Provider>
    )
}