import { PerformancePanel } from "./styles";

type Props = {
  children: React.ReactNode[];
};

export const PerformanceContainer: React.FC<Props> = ({ children }) => {
  return <PerformancePanel>{children}</PerformancePanel>;
};
