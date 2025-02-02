import { create } from "zustand";
import progressDetails from "../DummyDetails/progresses";

interface Progress {
  name: string;
  income: string;
  sold: number;
  percentage: number;
  profitorloss: boolean;
  id: number;
}
interface ProgressStore {
  progressDetails: Progress[];
  fetchProgressDetails: () => void;
}

export const useProgressStore = create<ProgressStore>((set) => ({
  progressDetails: [],
  fetchProgressDetails: () =>
    set({
      progressDetails: progressDetails,
    }),
}));
