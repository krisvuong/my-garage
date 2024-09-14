import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import * as SQLite from "expo-sqlite";
import { CarModel, EMPTY_CAR_MODEL } from "@/constants/models/CarModel";

const database = SQLite.openDatabaseSync("MyGarage.db");

export const InitDB = (setVehicles: Dispatch<SetStateAction<CarModel[]>>) => {
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
    return setVehicles(cars);
  } catch (e) {
    console.log("Error occured while fetching database", e);
    return [EMPTY_CAR_MODEL];
  }
};

export const AddVehicle = ({
  car,
  vehicles,
  setVehicles,
}: {
  car: CarModel;
  vehicles: CarModel[];
  setVehicles: Dispatch<SetStateAction<CarModel[]>>;
}) => {
  const { id, make, model, year, trim, engine } = car;
  const { lastInsertRowId, ...a } = database.runSync(
    `INSERT INTO vehicles (make, model, year, trim, engine) VALUES (
        "${make}", "${model}", ${year}, "${trim}", "${engine}")`
  );
  const updatedCars = [...vehicles].concat({ ...car, id: lastInsertRowId });
  setVehicles(updatedCars);
};
