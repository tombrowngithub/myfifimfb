import React from 'react'
import {icons} from "../../constants"
import {Tabs} from "expo-router";
import {Image, Text, View} from "react-native";


const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? "font-pbold" : "font-pregular"} text-xs `}
                  style={{color: color}}>
                {name}
            </Text>
        </View>
    )
}


const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#00EB97",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        borderTopWidth: 0,
                        borderTopColor: "#CDCDE0",
                        height: 64
                    }
                }}>

                <Tabs.Screen
                    name="Home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="Budget"
                    options={{
                        title: "Budget",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.chartPie}
                                color={color}
                                name="Budget"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="Investment"
                    options={{
                        title: "Investment",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.investment}
                                color={color}
                                name="Investment"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="Profile"
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    )
}
export default TabLayout
