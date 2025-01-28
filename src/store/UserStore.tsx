import { create } from "zustand";
interface Client {
    name: string;
    logo: string;
    id: string;
}
interface ClientStore {
    clients: Client[];
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
}

interface Sold {
    category: string;
    count: number;
    id: number;
}
interface SoldStore {
    solds: Sold[];
}
interface User {
    logo: string;
    name: string;
}
interface UserStore {
    users: User[];
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
}

export const useClientStore = create<ClientStore>(()=>({
    clients: []
}));

export const useProgressStore = create<ProgressStore>(() => ({
    progresses: [
        {name: 'Total Income', income: "1.4", sold: 150, percentage: 15, profitorloss: true, id: 0},
        {name: 'Total Income', income: "1.4", sold: 150, percentage: 15, profitorloss: true, id: 1},
        {name: 'Total Income', income: "1.4", sold: 150, percentage: 15, profitorloss: true, id: 2},
    ]
}));

export const useSoldStore = create<SoldStore>(() => ({
    solds: [
        {category: 'Favourite', count: 6.9, id: 0},
        {category: 'Favourite', count: 6.9, id: 1},
        {category: 'Favourite', count: 6.9, id: 2},
    ]
}));

export const useUserStore = create<UserStore>(() => ({
    users: [
        {name: 'Dan', logo:'https://cdn-icons-png.flaticon.com/128/1144/1144760.png'},
        {name: 'Dan', logo:''},
        {name: 'Dan', logo:''},
    ]
}));

export const useItemStore = create<ItemStore>(() => ({
    items: [
        {name: 'Bag', image: '', earned: '0', soldCount: 0},
        {name: 'Bag', image: '', earned: '0', soldCount: 1},
        {name: 'Bag', image: '', earned: '0', soldCount: 2},
    ],
     total: 4.5, 
     category: 'dresses'
}));
