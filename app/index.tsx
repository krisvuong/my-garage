import CustomButton from "@/components/CustomButton";
import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar"; // time, battery, wifi, etc.
import CarHomeTileList from "@/components/CarHomeTileList";
import { CarModel } from "@/constants/models/CarModel";
import * as SQLite from "expo-sqlite";
import { AppProvider } from "@/contexts/AppContext";
import { InitDB, AddVehicle } from "@/database/sqlite";

const App = () => {
  const router = useRouter(); // use this to navigate between pages
  // const [vehicles, setVehicles] = useState<CarModel[]>([]);
  const database = SQLite.openDatabaseSync("MyGarage.db");

  // TODO:
  /*
   * call DB init function from here; cannot currently do this because cant pass setVehicles callback function
   * because AppContext (which provides setVehicles) is available for children of App, not App itself
   *
   * remove all the DB stuff from this file
   *
   */

  useEffect(() => {
    InitDB();
  }, []);

  useEffect(() => {
    try {
      // database.execSync(`DROP TABLE vehicles;`);
      database.execSync(
        `CREATE TABLE IF NOT EXISTS vehicles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            make TEXT NOT NULL,
            model TEXT NOT NULL,
            year INT NOT NULL,
            trim TEXT NOT NULL,
            engine TEXT NOT NULL
          );`
      );
      const rows = database.getAllSync(`SELECT * FROM vehicles`);
      const cars: CarModel[] = rows.map((r: any) => ({
        id: r.id,
        make: r.make,
        model: r.model,
        year: r.year,
        trim: r.trim,
        engine: r.engine,
      }));
      setVehicles(cars);
    } catch (e) {
      console.log("Error occured while fetching database", e);
    }
  }, []);

  const addVehicle = (car: CarModel) => {
    const { id, make, model, year, trim, engine } = car;
    const { lastInsertRowId, ...a } = database.runSync(
      `INSERT INTO vehicles (make, model, year, trim, engine) VALUES ("${make}", "${model}", ${year}, "${trim}", "${engine}")`
    );
    const updatedCars = [...vehicles].concat({ ...car, id: lastInsertRowId });
    setVehicles(updatedCars);
  };

  return (
    <AppProvider>
      <View className="flex-1">
        <SafeAreaView className="mx-8">
          <View className="pt-10 pb-5">
            <Text className="text-5xl font-bold">Garage</Text>
          </View>
          <CarHomeTileList cars={vehicles} />
          <View className="my-5">
            <CustomButton
              text="+ Add new vehicle"
              onPress={() =>
                router.navigate({
                  pathname: "/find-vehicle",
                  params: { addVehicle: addVehicle },
                })
              }
            />
            <View>
              <CustomButton
                text="+ Add Honda"
                onPress={() => {
                  console.log("clicked");
                  addVehicle({
                    id: 0,
                    make: "Honda",
                    model: "Accord Coupe",
                    year: 2017,
                    trim: "EX-L",
                    engine: "2.3 L4",
                  });
                }}
              />
            </View>
          </View>
          <StatusBar style="dark" />
        </SafeAreaView>
      </View>
    </AppProvider>
  );
};
export default App;
