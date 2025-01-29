import { PerformancePanel } from "./Performance.style";
import clients from "../../DummyDetails/clients";

export const Performance = () => {
  return (
    <PerformancePanel>
      <h3>Performance</h3>

      <div className="clients">
        <div className="top">
        <p>New clients () </p>
        <a className="see-all" href="">See all</a>
        </div>
        <div className="avatars">
          {clients.map((client) => {
            return (
              <div className="img" key={client.id}>
                <img src={client.logo} alt="Client 1" />
                <p>{client.name}</p>
              </div>
            );
          })}
          
        </div>
        
      </div>

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
