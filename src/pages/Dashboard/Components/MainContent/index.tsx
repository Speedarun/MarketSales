import { Main } from "./styles";

type Props = {
  children: React.ReactNode[];
};

export const MainContent: React.FC<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};
