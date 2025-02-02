import { Sidebar } from "./styles";

type Props = {
  children: React.ReactNode[];
};

export const SideBar: React.FC<Props> = ({ children }) => {
  return <Sidebar>{children}</Sidebar>;
};
