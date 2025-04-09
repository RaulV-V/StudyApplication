import {Image, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 bg-bgbrown mb-10 justify-center w-full">
        <View className="flex-1 flex justify-center items-center w-full">
            <Text className="text-light-100 text-5xl font-bold">Welcome!</Text>
            <Image source={require("../../assets/images/Subject.png")}
            style={{width:100, height:150}}
            className={"justify-center content- "}/>
        </View>

        <View className="flex-2 mb-2 gap-x-1 flex-row justify-center w-full">
            <Image source={require("../../assets/images/Milk.png")}
                   style={{width:70, height:100}}
                   className={""}/>
            <Image source={require("../../assets/images/Mocha.png")}
                   style={{width:70, height:100}}
                   className={""}/>
    </View>


    </View>
  );
}
