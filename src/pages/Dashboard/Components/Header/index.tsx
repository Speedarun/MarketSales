import { useUserStore } from "../../../../store/UserStore";
import { ThreeDot } from "react-loading-indicators";
import { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { Profile } from "./styles";

const Header = () => {
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

  useEffect(() => {
    setUsers();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const user = users[0];
  return (
    <div>
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
    </div>
  );
};

export default Header;
