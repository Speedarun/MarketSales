import { PerformancePanel } from "./Performance.style";
import { useClientStore } from "../../store/ClientStore";
import { useEffect } from "react";
import { useProgressStore } from "../../store/ProgressStore";

export const Performance = () => {
  const { clientDetails, fetchClientDetails } = useClientStore();
  const { progressDetails, fetchProgressDetails } = useProgressStore();
  useEffect(() => {
    fetchClientDetails();
    fetchProgressDetails();
  }, []);

  return (
    <PerformancePanel>
      <h3>Performance</h3>
      <div className="clients">
        <div className="top">
          <p>New clients ({clientDetails.length}) </p>
          <a className="see-all" href="">
            See all
          </a>
        </div>
        <div className="avatars">
          {clientDetails.map((client) => {
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
        {progressDetails.map((progress) => {
          return (
            <div className="row">
              <div className="details">
                <div className="title">{progress.name}</div>
                <div className="value">$ {progress.income}K</div>
              </div>
              <div className="line"></div>
              <div className="details2">
                <div className="title">{progress.sold} orders</div>
                <div className={progress.profitorloss ? "badge positive": "badge negative"}>{progress.percentage}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </PerformancePanel>
  );
};
