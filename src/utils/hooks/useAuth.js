import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const AuthContext = createContext({

})

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{
        user: "miles,"
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
    return useContext(AuthContext)
}
