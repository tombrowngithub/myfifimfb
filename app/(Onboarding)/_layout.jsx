import React from 'react'
import {Stack} from "expo-router";

const OnboardingLayout = () => {
    return(
        <Stack>
            <Stack.Screen name="OnboardingOne" options={{headerShown: false}}/>
            <Stack.Screen name="OnboardingTwo" options={{headerShown: false}}/>
            <Stack.Screen name="OnboardingThree" options={{headerShown: false}}/>
        </Stack>
    )
}
export default OnboardingLayout
