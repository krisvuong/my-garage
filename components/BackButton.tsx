import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BackButton = ({ text }: { text: string }) => {
  return (
    <View className="py-3 w-10 rounded-md">
      <MaterialIcons
        name="arrow-back-ios"
        size={24}
        color="black"
        className="inline"
      />
      {/* <Text className="inline text-xl">{text}</Text> */}
    </View>
  );
};

export default BackButton;
