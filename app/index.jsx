import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import {icons} from "../constants"
import {router} from "expo-router"
import OnboardingView from "../components/OnboardingView"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {useGlobalStore} from "../context/globalStore"
import Loader from "../components/Loader"



const Index = () => {
    const [activeItem, setActiveItem] = useState(0)
    const [firstTime, setFirsTime] = useState(null) // Initially null to indicate loading state
    const {userData, loading, isLogged} = useGlobalStore()

    useEffect(() => {
        const checkFirstTimeOpen = async () => {
           const isFirstTime = await AsyncStorage.getItem('isFirstTime')

            if (isFirstTime === null) {
                // First time the app is opened after installation
                await AsyncStorage.setItem('isFirstTime', 'false')
                setFirsTime(true)
            } else {
                setFirsTime(false)
            }
        }

        checkFirstTimeOpen()
    }, [])

    useEffect(() => {
        // After checking for first time, proceed with login checks
        if (firstTime === false && !loading) {
            if (isLogged && userData) {
                router.replace("/Home")
            } else {
                router.replace("/Login")
            }
        }
    }, [firstTime, isLogged, loading, userData])

    function handleNext() {
        if(activeItem < 2){
            setActiveItem(activeItem + 1)
        }else{
            router.push('/Register')
        }
    }

    if (firstTime === null || loading) {
        // Show the loader while waiting for first-time check or global loading state
        return <Loader />
    }

    if (firstTime) {
        return (
            <SafeAreaView className="flex-1 bg-primary">
                <OnboardingView activeItem={activeItem} />

                {activeItem !== 2 && (
                    <View className="flex-row justify-between items-center mx-4 mb-12">
                        <TouchableOpacity onPress={() => router.replace("Register")}>
                            <Text className="text-gray-200 text-center text-lg">Skip</Text>
                        </TouchableOpacity>

                        <View className="flex-row items-center justify-center">
                            <Text className={`w-[12px] h-[12px] rounded-full ${activeItem === 0 ? 'bg-secondary' : 'bg-gray-100'}`} />
                            <Text className={`w-[12px] mx-2 h-[12px] rounded-full ${activeItem === 1 ? 'bg-secondary' : 'bg-gray-100'}`} />
                            <Text className={`w-[12px] h-[12px] rounded-full ${activeItem === 2 ? 'bg-secondary' : 'bg-gray-100'}`} />
                        </View>

                        <TouchableOpacity
                            onPress={handleNext}
                            className="bg-secondary p-5 rounded-full items-center justify-center">
                            <Image resizeMode="contain" source={icons.arrowRM} />
                        </TouchableOpacity>
                    </View>
                )}
            </SafeAreaView>
        )
    }

    return null
}
export default Index
