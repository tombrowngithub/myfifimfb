import React from 'react'
import {View, Text, Image} from "react-native";
import {images} from "../../constants";

const OnboardingTwo = () => {
    return (
        <View className="bg-primary w-full h-full justify-center">
            <View className="justify-center items-center">
                <Image
                    className="w-[319px] h-[305px]"
                    resizeMode="contain"
                    source={images.onboarding2}/>
            </View>

            <View className="w-100">
                <Text className="mx-1 text-center text-black-100 text-3xl font-pbold mt-14 mb-3">
                    Smart Investing Opportunities
                </Text>
                <Text className="mx-1 text-gray-300 font-pmedium text-lg text-center leading-6">
                    Explore a world of investment possibilities with our smart investing feature.
                </Text>
            </View>
        </View>
    )
}
export default OnboardingTwo
