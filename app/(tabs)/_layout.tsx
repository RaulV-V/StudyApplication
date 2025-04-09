import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {Tabs} from 'expo-router';
import {images} from "@/constants/images";

const TabIcon = ({focused, icon, title}: any) => {
    if(focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 flex-col items-center   mt-4
        justify-center rounded-full overflow-hidden">
                <Image source={icon} tintColor="white"
                       className="size-5"/>
                <Text className="text-white text-base
            font-semibold ml-2">{title}</Text>
            </ImageBackground>
        )
    }

        return (
            <View className="size-full justify-center items-center
            mt-4 rounded-full">
                <Image source={icon} tintColor="gray"
                       className="size-5"/>
            </View>
        )


}

const ComponentName = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarStyle: {
            backgroundColor: '#0f0D23',
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 30,
            height: 52,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#0f0D23',
        },
    }}>
        <Tabs.Screen
        name="index"
        options={{title: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) => (
        <TabIcon
            focused={focused}
            icon={images.home}
            title="Home"
        />
        )}}
        />
        <Tabs.Screen
            name="study"
            options={{title: 'Study',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                <TabIcon
                focused={focused}
                icon={images.Study}
                title="Study"/>
            )}}
             />
        <Tabs.Screen
            name="search"
            options={{title: 'Search',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                        focused={focused}
                        icon={images.search}
                        title="Search"/>
                )}}
        />
        <Tabs.Screen
            name="profile"
            options={{title: 'Profile',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                        focused={focused}
                        icon={images.person}
                        title="Profile"/>
                )}}
        />
    </Tabs>
  );
};

export default ComponentName;

const styles = StyleSheet.create({});
