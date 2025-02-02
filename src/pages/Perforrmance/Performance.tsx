import { Header } from "./Components/Header";
import { PerformanceContainer } from "./Components/PerformanceContainer";
import { Progress } from "./Components/Progress";

export const Performance = () => {
  return (
    <PerformanceContainer>
      <Header />
      <Progress />
    </PerformanceContainer>
  );
};
