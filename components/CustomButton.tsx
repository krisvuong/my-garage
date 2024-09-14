import React from "react";
import { View, Text, Pressable } from "react-native";

const CustomButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View className="px-20">
        <View className="bg-gray-200 w-50 py-3 rounded-md">
          <Text className="text-center">{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CustomButton;
