import {
  MainContent,
  WelcomeCard,
  Metrics,
  Profile,
  RecentSold,
} from "./DashBoard.style";
import bag from "../../assets/bag.jpg";
import cart from "../../assets/cart.png";
import { FaCartPlus, FaGlasses, FaBell } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { useUserStore } from "../../store/UserStore";
import { ThreeDot } from "react-loading-indicators";
import { useMetricStore } from "../../store/MetricsStore";
import Skeleton from "react-loading-skeleton";

export const DashBoard = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const { users, setUsers } = useUserStore();
  const [isLoading, setLoading] = useState(true);
  const {metrics, setMetrics} = useMetricStore();

  useEffect(() => {
    setUsers();
    setMetrics();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const user = users[0];
  return (
    <MainContent>
      <Profile>
        <div>
          <h3 style={{ display: "inline" }}>
            <span>
              {" "}
              Welcome back,{" "}
              {isLoading ? (
                <ThreeDot color="#a6ada6" size="medium" text="" textColor="" />
              ) : (
                user?.name
              )}
            </span>
            !
          </h3>
          <p>
            {new Date().getDate()} {month[new Date().getMonth()]},{" "}
            {weekday[new Date().getDay()]}
          </p>
        </div>
        <div className="bell-logo">
          <FaBell size={25} />
        </div>
      </Profile>
      <WelcomeCard>
        <div>
          <h2>Good Job!</h2>
          <p>
            You have over 20,000 visitors in the
            <br /> last 10 days. Keep it up!
          </p>
        </div>
        <div>
          <img
            src={cart}
            alt="Shopping cart"
            style={{ maxWidth: "100px", zIndex: 1 }}
          />
        </div>
      </WelcomeCard>
      <Metrics>
        {metrics.map((temp: any) => {
          return (
            isLoading ? <Skeleton containerClassName="div" height={100} />: <div className="div">
              <h4>{temp.count}</h4>
              <p>{temp.label}</p>
            </div>
          );
        })}
      </Metrics>
      <RecentSold>
        <h3>Recent Sold</h3>
        <div className="items">
          <div className="item1">
            <img src={bag} alt="Bag" />
            <h4>Bang Bag</h4>
            <p>$1.5k earned</p>
          </div>
          <div className="item2">
            <div className="div1">
              <div className="img">
                <FaGlasses size={35} />
              </div>
              <div className="img">
                <FaCartPlus size={35} />
              </div>
            </div>

            <div className="div2">
              <h4>Dresses</h4>
              <p>
                <span>25 Items</span> <span>$3.5k earned</span>
              </p>
            </div>
          </div>
        </div>
      </RecentSold>
    </MainContent>
  );
};
