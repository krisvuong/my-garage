import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { MaterialCommunityIcons, Entypo, AntDesign } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "index",
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0a4d4a",
      }}
    >
      <Tabs.Screen
        name="find-vehicle"
        options={{
          tabBarLabel: "Find Vehicle",
          tabBarIcon: ({ color }) => (
            <AntDesign name="car" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="about-vehicle"
        options={{
          tabBarLabel: "About Vehicle",
          tabBarIcon: ({ color }) => (
            <AntDesign name="car" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
