import { Button, Text, View } from 'react-native'
import React from 'react'

const UserLogin = ({ navigate }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
     <Button
        title='Register'
        onPress={() => navigation.navigate("Register")}
     />
      <Button
        title='Login'
        onPress={() => navigation.navigate("Login")}
     />
      <Text>landing</Text>
    </View>
  )
}

export default UserLogin

