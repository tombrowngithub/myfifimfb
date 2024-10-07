import React from 'react'
import {View, Text, ActivityIndicator} from "react-native";

const Loader = () => {
    return (
        <View className="w-full absolute z-10 h-[100vh] justify-center items-center bg-[#000] opacity-80" >
            <ActivityIndicator size="large" color="#ffff" className="fix"/>
            <Text className="font-pregular text-lg text-white">Loading...</Text>
        </View>
    )
}
export default Loader
