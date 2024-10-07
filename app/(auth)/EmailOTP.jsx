import React, {useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity, Image, Alert} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons} from "../../constants";
import {auth} from "../../utility/firebaseConfig"
import {router} from "expo-router";
import Loader from "../../components/Loader";

const EmailOTP = () => {
    const [loading, setLoading] = useState(false)

    const SendEmailOTP = async () => {
        setLoading(true)

        try {
            const user = auth.currentUser
            await user.reload()
            if(user.emailVerified){
                router.replace("/Login")
            }else{
                Alert.alert('Error', 'Email not verified. Please check your inbox')
            }

        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setLoading(false)
        }
    }



    return (
        <SafeAreaView className="bg-primary, h-full w-full justify-center">
            {loading &&
              <Loader/>
            }
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="mx-2 mb-2 mt-14"
                contentContainerStyle={{minHeight: '100%', marginVertical: 70}}
            >
                <View className="w-full justify-center items-center my-8">
                    <Text className="text-gray-200 font-bold">An Email verification link has been sent to you.</Text>
                    <Text className="text-gray-200 mt-6">Click the button once you have verified your email</Text>
                </View>

                <TouchableOpacity onPress={SendEmailOTP}
                    className="bg-secondary shadow-sm flex-row p-3 mt-3 rounded-full items-center justify-center">
                    <Text className="ml-3 text-lg text-white">Verify Email</Text>
                </TouchableOpacity>

                <View className="flex-row justify-between mt-5">
                    <View className="flex-row items-center">
                        <Image
                            className="w-4 h-4"
                            resizeMode="contain"
                            source={icons.vectorPhone}
                        />
                        <Text className="text-gray-200 ml-1">Get a call</Text>
                    </View>

                    <View className="flex-row items-center">
                        <Image
                            className="w-4 h-4"
                            resizeMode="contain"
                            source={icons.vectorEmail}/>
                        <Text className="text-gray-200 ml-1">Receive as sms</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default EmailOTP
