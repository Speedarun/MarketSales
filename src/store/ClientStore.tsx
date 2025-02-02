import { create } from "zustand";
import clientDetails from "../DummyDetails/clients";

interface Client {
  name: string;
  logo: string;
  id: string;
}
interface ClientStore {
  clientDetails: Client[];
  fetchClientDetails: () => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  clientDetails: [],
  fetchClientDetails: () => {
    set({
      clientDetails: clientDetails,
    });
  },
}));
