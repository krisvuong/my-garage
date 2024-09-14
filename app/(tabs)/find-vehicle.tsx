import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import CustomButton from "@/components/CustomButton";
import BackButton from "@/components/BackButton";
import AutocompleteDropdown from "@/components/AutocompleteDropdown";

const FindVehicle = () => {
  const emptyArr: string[] = [];
  const [makeInput, setMakeInput] = useState("");
  const [modelInput, setModelInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [engineInput, setEngineInput] = useState("");
  const [trimInput, setTrimInput] = useState("");

  const [filteredMakeOptions, setFilteredMakeOptions] = useState(emptyArr);
  const [filteredModelOptions, setFilteredModelOptions] = useState(emptyArr);
  const [filteredYearOptions, setFilteredYearOptions] = useState(emptyArr);
  const [filteredTrimOptions, setFilteredTrimOptions] = useState(emptyArr);
  const [filteredEngineOptions, setFilteredEngineOptions] = useState(emptyArr);

  const makeOptions = [
    "Honda",
    "Suxx",
    "Suxxx",
    "Suxxxxx",
    "Suxxxxxxx",
    "Suxxxxxxxx",
    "Subaru",
    "Scion",
    "Saab",
    "Suzuki",
  ];
  const modelOptions = ["Accord", "Corolla", "BRZ"];
  const yearOptions = ["2020", "2021", "2022", "2023", "2024"];
  const trimOptions = ["A", "B", "C", "D", "E"];
  const engineOptions = ["2.0", "2.2", "2.8", "4.6"];

  const router = useRouter();

  const onMakeChange = (input: string) =>
    onInputChange(input, makeOptions, setFilteredMakeOptions, setMakeInput);
  const onModelChange = (input: string) =>
    onInputChange(input, modelOptions, setFilteredModelOptions, setModelInput);
  const onYearChange = (input: string) =>
    onInputChange(input, yearOptions, setFilteredYearOptions, setYearInput);
  const onTrimChange = (input: string) =>
    onInputChange(input, trimOptions, setFilteredTrimOptions, setTrimInput);
  const onEngineChange = (input: string) =>
    onInputChange(
      input,
      engineOptions,
      setFilteredEngineOptions,
      setEngineInput
    );

  const onInputChange = (
    input: string,
    options: string[],
    setFilteredOptions: (as: string[]) => void,
    setInput: (a: string) => void
  ) => {
    setInput(input);
    if (input) {
      const filtered = options.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(emptyArr);
    }
  };

  return (
    <View className="flex-1 px-8 py-10">
      <View className="my-5">
        <Pressable onPress={() => router.navigate("/")}>
          <BackButton text="Back" />
        </Pressable>
      </View>
      <View className="my-5">
        <Text className="text-5xl mb-5 font-bold">Find your vehicle</Text>
        <AutocompleteDropdown options={makeOptions} label="Make" />
        <AutocompleteDropdown options={modelOptions} label="Model" />
        <AutocompleteDropdown options={yearOptions} label="Year" />
        <AutocompleteDropdown options={trimOptions} label="Trim" />
        <AutocompleteDropdown options={engineOptions} label="Engine" />
      </View>
      <View className="my-5">
        <CustomButton
          text="Add to garage"
          onPress={() => {
            // TODO: save car details to garage
            router.navigate("/");
          }}
        />
      </View>
    </View>
  );
};
export default FindVehicle;
