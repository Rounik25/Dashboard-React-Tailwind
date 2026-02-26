import { create } from "zustand";
import jsonData from "../data/survey-mock-data 1.json"

export const useDataStore = create ((set) => ({
    data: [],
    loadFromJson: () => set (({items: jsonData}))
}))