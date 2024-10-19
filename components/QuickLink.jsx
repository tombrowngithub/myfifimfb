import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native";
import {router} from "expo-router"
import {icons} from "../constants"


const QuickLink = () => {
    return (
        <View className="w-full mt-1 p-3">
            <Text className="text-lg">Quick links</Text>

            <View className="flex-row mt-3">
                <TouchableOpacity className="items-center flex-1">
                    <Text className="bg-[#AF2BBF] w-[30px] h-[30px] rounded-full text-center">
                        <Image className="w-5 h-5" source={icons.phone2} resizeMode="contain"/>
                    </Text>
                    <Text className="font-pregular mt-3">Airtime</Text>
                </TouchableOpacity>

                <TouchableOpacity  className="items-center flex-1">
                    <Text className="bg-[#00EB97] w-[30px] h-[30px] rounded-full text-center">
                        <Image className="w-5 h-5" source={icons.lightbulb} resizeMode="contain"/>
                    </Text>
                    <Text className="font-pregular mt-3">Electricity</Text>
                </TouchableOpacity>

                <TouchableOpacity  className="items-center flex-1">
                    <Text className="bg-[#FF4EF8] w-[30px] h-[30px] rounded-full text-center">
                        <Image className="w-5 h-5" source={icons.wifiIcon} resizeMode="contain"/>
                    </Text>
                    <Text className="font-pregular mt-3">Data</Text>
                </TouchableOpacity>

                <TouchableOpacity  className="items-center flex-1">
                    <Text className="bg-[#0A2463] w-[30px] h-[30px] rounded-full text-center">
                        <Image className="w-5 h-5" source={icons.menu} resizeMode="contain"/>
                    </Text>
                    <Text className="font-pregular mt-3">Others</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default QuickLink
