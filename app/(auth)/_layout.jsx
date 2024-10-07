import React from 'react'
import {Stack} from "expo-router";

const AuthLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="Register" options={{headerShown: false}}/>
            <Stack.Screen name="Login" options={{headerShown: false}}/>
            <Stack.Screen name="EmailOTP" options={{headerShown: false}}/>
        </Stack>
    )
}
export default AuthLayout
