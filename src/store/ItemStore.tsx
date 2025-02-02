import { create } from "zustand";
import itemDetails from "../DummyDetails/items";

interface Item {
  image: string;
  name: string;
  earned: string;
  soldCount: number;
}
interface ItemStore {
  items: Item[];
  total: number;
  category: string;
  setItems: () => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  setItems: () =>
    set({
      items: itemDetails,
    }),
  total: 4.5,
  category: "dresses",
}));
