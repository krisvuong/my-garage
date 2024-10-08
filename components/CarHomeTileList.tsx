import { useRouter } from "expo-router";
import { View, Text, FlatList, Pressable } from "react-native";
import CarHomeTile from "./CarHomeTile";
import { CarModel } from "@/constants/models/CarModel";

const CarHomeTileList = ({ cars }: { cars: CarModel[] }) => {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="my-5">
            <Pressable
              onPress={() =>
                router.navigate({
                  pathname: "/about-vehicle",
                  params: { id: item.id },
                })
              }
            >
              <CarHomeTile
                id={item.id}
                make={item.make}
                model={item.model}
                year={item.year}
                engine={item.engine}
                trim={item.trim}
              />
            </Pressable>
          </View>
        )}
      ></FlatList>
    </View>
  );
};
export default CarHomeTileList;
