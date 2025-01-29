import {
  MainContent,
  WelcomeCard,
  Metrics,
  Profile,
  RecentSold,
} from "./DashBoard.style";
import data from '../../DummyDetails/users';
import dummy from '../../DummyDetails/metrics';
import bag from '../../assets/bag.jpg';
import cart from '../../assets/cart.png';
import { FaCartPlus, FaGlasses } from "react-icons/fa";

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
  const user = data.find((user) => user.id === 1);
  
  return (
    <MainContent>
      <Profile>
        <h1>Welcome back, {user?.name}!</h1>
        <p>
          {new Date().getDate()} {month[new Date().getMonth()]},{" "}
          {weekday[new Date().getDay()]}
        </p>
      </Profile>
      <WelcomeCard>
        <div>
          <h2>Good Job!</h2>
          <p>You have over 20,000 visitors in the<br/> last 10 days. Keep it up!</p>
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
        {
          dummy.map((temp: any) => {
            return (
              <div>
          <h4>{temp.count}</h4>
          <p>{temp.label}</p>
        </div>
            )
          })
        }
        
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
              <div className="img"><FaGlasses size={35}/></div>
              <div className="img"><FaCartPlus size={35}/></div>
            </div>

            <div className="div2">
              <h4>Dresses</h4>
              <p><span>25 Items</span> <span>$3.5k earned</span></p>
            </div>
          </div>
        </div>
      </RecentSold>
    </MainContent>
  );
};
