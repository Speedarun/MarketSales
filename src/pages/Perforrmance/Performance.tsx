import { PerformancePanel } from "./Performance.style";
import { useClientStore } from "../../store/ClientStore";
import { useEffect, useState } from "react";
import { useProgressStore } from "../../store/ProgressStore";
import { FaShoppingBasket } from "react-icons/fa";
import { ThreeDot } from "react-loading-indicators";

export const Performance = () => {
  const { clientDetails, fetchClientDetails } = useClientStore();
  const { progressDetails, fetchProgressDetails } = useProgressStore();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchClientDetails();
    fetchProgressDetails();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PerformancePanel>
      <h3>Performance</h3>
      <div className="clients">
        <div className="top">
          <p>New clients ({isLoading ? <ThreeDot color="#a6ada6" size="small" />: clientDetails.length}) </p>
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
                <div className="title"><FaShoppingBasket/> {progress.sold} orders</div>
                <div className={progress.profitorloss ? "badge positive": "badge negative"}>{progress.percentage}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </PerformancePanel>
  );
};
