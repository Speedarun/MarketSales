import { create } from "zustand";
import soldDetails from '../DummyDetails/solds';

interface Sold {
    category: string;
    count: number;
    id: number;
}
interface SoldStore {
    solds: Sold[];
    setSolds: () => void;
}

export const useSoldStore = create<SoldStore>((set) => ({
    solds: [],
    setSolds: () => set({
        solds: soldDetails
    })
}));