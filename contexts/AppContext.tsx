import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { View, Text } from "react-native";
import { CarModel } from "@/constants/models/CarModel";
import { EMPTY_CAR_MODEL } from "@/constants/models/CarModel";
import * as SQLite from "expo-sqlite";

interface AppContextType {
  vehicles: CarModel[];
  setVehicles: Dispatch<SetStateAction<CarModel[]>>;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: any }) => {
  const [vehicles, setVehicles] = useState<CarModel[]>([]);

  return (
    <AppContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
