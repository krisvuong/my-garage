import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

const AutocompleteDropdown = ({
  options,
  label,
}: {
  options: string[];
  label: string;
}) => {
  const emptyArr: string[] = [];
  const [input, setInput] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(emptyArr);

  const onInputChange = (input: string) => {
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
    <View>
      <TextInput
        label={label}
        value={input}
        onChangeText={(text) => onInputChange(text)}
        mode="outlined"
        outlineStyle={{ borderRadius: 20 }}
        className="mt-4"
        // onBlur={() => setFilteredMakeOptions(emptyArr)}
      />
      {filteredOptions.length > 0 && (
        <FlatList
          data={Object.values(filteredOptions)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setInput(item);
                setFilteredOptions(emptyArr);
              }}
            >
              <View className="py-2 px-4">
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          className="max-h-20 rounded-b-[20px] border-l-2 border-r-2 border-b-2 border-gray-300"
        />
      )}
    </View>
  );
};
export default AutocompleteDropdown;
