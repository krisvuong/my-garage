import CarHomeTile from "@/components/CarHomeTile";
import CustomButton from "@/components/CustomButton";
import CARDATA from "@/constants/CarData";
import React from "react";
import { View, Text, SafeAreaView, FlatList, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar"; // time, battery, wifi, etc.
import { Provider } from "react-native-paper";
import CarHomeTileList from "@/components/CarHomeTileList";

const App = () => {
  const router = useRouter(); // use this to navigate between pages

  return (
    <View className="flex-1">
      <SafeAreaView className="mx-8">
        <View className="pt-10 pb-5">
          <Text className="text-5xl font-bold">Garage</Text>
        </View>
        <CarHomeTileList />
        <View className="my-5">
          <CustomButton
            text="+ Add new vehicle"
            onPress={() => router.navigate("/find-vehicle")}
          />
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  );
};
export default App;
