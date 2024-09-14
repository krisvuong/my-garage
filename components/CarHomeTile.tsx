import React from "react";
import { View, Text, Pressable } from "react-native";
import { CarModel } from "@/constants/models/CarModel";

const CarHomeTile = ({ id, make, model, year, trim, engine }: CarModel) => {
  return (
    <View className="h-44 px-6 justify-center bg-black rounded-3xl">
      <Text className="mb-2 text-white font-medium text-3xl">
        {year} {make} {model}
      </Text>
      <Text className="text-white font-medium text-xs">XXX,XXX km</Text>
      <Text className="text-white font-medium text-xs">
        XX upcoming services
      </Text>
      <Text className="text-white font-medium text-xs">
        XX overdue services
      </Text>
    </View>
  );
};
export default CarHomeTile;
