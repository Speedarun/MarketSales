import  Header  from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { Metrics } from "./Components/Metrics";
import { RecentSold } from "./Components/RecentSolds";
import { WelcomeCard } from "./Components/WelcomeCard";

export const DashBoard = () => {
  return (
    <MainContent>
      <Header />
      <WelcomeCard />
      <Metrics />
      <RecentSold />
    </MainContent>
  );
};
