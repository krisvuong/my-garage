import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import BackButton from "@/components/BackButton";

const AboutVehicle = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex-1 px-8 py-10">
      <View className="my-5">
        <Pressable
          onPress={() => {
            router.navigate("/");
          }}
        >
          <BackButton text="Back" />
        </Pressable>
      </View>
      <SafeAreaView>
        <Text>About Vehicle: {id}</Text>
      </SafeAreaView>
    </View>
  );
};
export default AboutVehicle;
