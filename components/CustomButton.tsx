import React from "react";
import { View, Text } from "react-native";

const CustomButton = ({ text }: { text: string }) => {
  return (
    <View className="px-20">
      <View className="bg-gray-200 w-50 py-3 rounded-md">
        <Text className="text-center">{text}</Text>
      </View>
    </View>
  );
};

export default CustomButton;
