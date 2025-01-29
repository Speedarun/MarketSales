import { create } from "zustand";
interface Client {
    name: string;
    logo: string;
    id: string;
}
interface ClientStore {
    clients: Client[];
    setClients: () => void;
}
interface Progress {
    name: string;
    income: string;
    sold: number;
    percentage: number;
    profitorloss: boolean;
    id: number;
}
interface ProgressStore {
    progresses: Progress[];
    setProgresses: () => void;
}

interface Sold {
    category: string;
    count: number;
    id: number;
}
interface SoldStore {
    solds: Sold[];
    setSolds: () => void;
}
interface User {
    logo: string;
    name: string;
}
interface UserStore {
    users: User[];
    setUsers: () => void;
}
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

export const useClientStore = create<ClientStore>((set)=>({
    clients: [],
    setClients: () => set((state) => ({
        clients: [...state.clients]
    }))
}));

export const useProgressStore = create<ProgressStore>((set) => ({
    progresses: [],
    setProgresses: () => set((state) => ({
        progresses: [...state.progresses]
    }))

}));

export const useSoldStore = create<SoldStore>((set) => ({
    solds: [],
    setSolds: () => set((state) => ({
        solds: [...state.solds]
    }))
}));

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    setUsers: () => set((state) => ({
        users: [...state.users]
    }))
}));

export const useItemStore = create<ItemStore>((set) => ({
    items: [],
    setItems: () => set((state) => ({
        items: [...state.items]
    })),
     total: 4.5, 
     category: 'dresses'
}));
