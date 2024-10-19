import React from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGlobalStore} from "../../context/globalStore";
import {icons, images} from "../../constants";
import {Link} from "expo-router";
import QuickLink from "../../components/QuickLink";
import {transactionLog} from "../../lib/transactionData";

const Home = () => {
    const {user, userData} = useGlobalStore()


    const getGreeting = () => {
        const date = new Date()
        const hours = date.getHours()

        if (hours < 12) {
            return 'Good morning'
        } else if (hours < 16) {
            return 'Good Afternoon'
        } else {
            return 'Good Evening'
        }
    }

    return (
        <SafeAreaView className="bg-primary w-full h-full">
            <View className="flex-row justify-between items-center px-3 pt-4">
                <View>
                    <Text className="text-xl font-bold text-gray-700">{getGreeting()}</Text>
                    <Text className="text-gray-600 ">{userData?.firstName + " " + userData?.lastName}</Text>
                </View>
                <View className="flex-row gap-3">
                    <Image className="w-6 h-6" source={icons.scan} resizeMode="contain"/>
                    <Image className="w-6 h-6" source={icons.bell} resizeMode="contain"/>
                </View>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{minWidth: '100%', alignItems: 'center', justifyContent: 'center'}}
            >
                <View className="w-full flex-row gap-2 mb-[-20px] p-3 items-center">
                    <Text className=" text-gray-200 text-start">Total Balance</Text>
                    <Image className="w-6 h-6" source={icons.eye} resizeMode="contain"/>
                </View>

                <View className="w-full p-3">
                    <Text
                        className="text-gray-800 font-pregular text-3xl">${userData?.accountBalance.toLocaleString()}</Text>
                    <View className="flex-row justify-between gap-3 mt-1">
                        <TouchableOpacity
                            className="flex-1 p-2 flex-row bg-[#3E92CC] rounded-3xl justify-center items-center">
                            <Image className="w-6 h-6 mr-2" source={icons.transfer} resizeMode="contain"/>
                            <Link href="/Transfer" className="text-white font-pregular text-lg">Transfer</Link>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="flex-1 p-2 flex-row bg-[#00EB97] rounded-3xl justify-center items-center">
                            <Image className="w-6 h-6 mr-2" source={icons.receiveIcon1} resizeMode="contain"/>
                            <Text className="text-white font-pregular text-lg">Receive</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <QuickLink/>

                {/*Banner start*/}
                <View
                    className="flex-row justify-around items-center bg-[#00EB97] w-[95%] h-[120px] mt-4 rounded-[8px]">
                    <View className="mr-0">
                        <Image className="w-[112px] h-[83px]" source={images.rafiki} resizeMode='contain'/>
                    </View>

                    <View className="">
                        <Text className="text-[21px] text-white font-pregular">Complete your</Text>
                        <Text className="text-[21px] text-white font-pregular">account verification</Text>
                    </View>

                    <TouchableOpacity
                        className="w-[40px] h-[40px] rounded-full items-center justify-center bg-[#54F2B9] mt-7 mr-3">
                        <Image className="w-6 h-6" source={icons.transfer} resizeMode="contain"/>
                    </TouchableOpacity>
                </View>
                {/*Banner end*/}

                {/*Transaction log start*/}
                <View className="w-full mt-2 mb-14">
                    <View className="w-full flex-row justify-between items-center p-3">
                        <Text className="text-gray-200 text-lg">Transactions</Text>
                        <Link href="/Transactions" className="text-[#00EB97] font-pregular">See all</Link>
                    </View>

                    {transactionLog.length === 0 ? (
                        <View className="w-[100vw] flex-row items-center gap-2 justify-center">
                            <Image className="w-5 h-5" source={icons.empty} resizeMode="contain"/>
                            <Text className="text-gray-100 text-lg">No transaction history</Text>
                        </View>
                    ) : (
                        transactionLog.slice(0, 4).map((item) => (
                            <TouchableOpacity
                                className="flex-row justify-between p-3">
                                <View className="flex-row items-center gap-2">
                                    <Image
                                        className="w-4 h-4"
                                        source={item.transactionType === 'receive' ? icons.receiveIcon2
                                            : item.transactionType === 'transfer' ? icons.sent
                                                : icons.sent}
                                        resizeMode="contain"
                                    />

                                    <View>
                                        <Text className="font-pregular text-[16px]">
                                            {item.transactionType === 'airtime' ? `Sent airtime to ${item.phone}` :
                                                item.transactionType === 'receive' ?
                                                    `Received from ${item.name}` : `Transferred to ${item.name}`}
                                        </Text>

                                        <Text className="text-xs text-gray-500">
                                            {item.dateTime} (Category: {item.category})
                                        </Text>
                                    </View>

                                </View>

                                <View>
                                    <Text className={`font-pbold ${item.transactionType ===
                                    'transfer' ? "text-red-600" : item.transactionType === 'receive' ?
                                        "text-green-600" : "text-red-600"}`}>
                                        {item.transactionType === 'receive' ? "+" : "-"}
                                        ${item.amount.toLocaleString()}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    )}
                </View>

                {/*Transaction log end*/}

            </ScrollView>

        </SafeAreaView>
    )
}
export default Home
