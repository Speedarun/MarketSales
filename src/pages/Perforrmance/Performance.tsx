import { profile } from "../../assets/assets";
import { PerformancePanel } from "./Performance.style";

export const Performance = () => {
  return (
    <PerformancePanel>
      <h3>Performance</h3>

      <div className="clients">
        <div className="avatars">
          <div className="img">
            <img src={profile} alt="Client 1" />
            <p>Ali</p>
          </div>
          <div className="img">
            <img src={profile} alt="Client 2" />
            <p>Alan</p>
          </div>
          <div className="img">
            <img src={profile} alt="Client 3" />
            <p>Arun</p>
          </div>
          <div className="img">
            <img src={profile} alt="Client 3" />
            <p>Arun</p>
          </div>
        </div>
      </div>
      <div className="see-all"><a href="">See all</a></div>

      <div className="progress">
        <h5>Your Progress</h5>
        <div className="row">
          <div className="details">
            <div className="title">Total Income</div>
            <div className="value">$1.4K</div>
          </div>
          <div className="line"></div>
          <div className="details2">
            <div className="title">150 orders</div>
            <div className="badge positive">+15%</div>
          </div>
        </div>

        <div className="row">
          <div className="details">
            <div className="title">Total Income</div>
            <div className="value">$1.4K</div>
          </div>
          <div className="line"></div>
          <div className="details2">
            <div className="title">150 orders</div>
            <div className="badge positive">+15%</div>
          </div>
        </div>

        <div className="row">
          <div className="details">
            <div className="title">Total Income</div>
            <div className="value">$1.4K</div>
          </div>
          <div className="line"></div>
          <div className="details2">
            <div className="title">150 orders</div>
            <div className="badge positive">+15%</div>
          </div>
        </div>
      </div>
    </PerformancePanel>
  );
};
