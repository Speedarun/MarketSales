import { create } from "zustand";

import userDetails from "../DummyDetails/users";

interface User {
  logo: string;
  name: string;
}
interface UserStore {
  users: User[];
  setUsers: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  setUsers: () =>
    set({
      users: userDetails,
    }),
}));
