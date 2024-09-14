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
    <View className="flex-1 px-8 py-10">
      <SafeAreaView>
        <View className="pt-10 pb-5">
          <Text className="text-5xl font-bold">Garage</Text>
        </View>
        <CarHomeTileList />
        <View className="my-5">
          <Pressable onPress={() => router.navigate("/find-vehicle")}>
            <CustomButton text="+ Add new vehicle" />
          </Pressable>
        </View>
        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  );
};
export default App;
