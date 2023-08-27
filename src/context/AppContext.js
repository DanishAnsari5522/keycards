import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()
export const AppContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})

    const getCurrentUser = async () => {
        const user = await AsyncStorage.getItem("currentUser")
        setCurrentUser({name:'danish',d:'z'})
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    return (
        <AppContext.Provider value={{
            currentUser
        }}>
            {children}
        </AppContext.Provider>
    )
}