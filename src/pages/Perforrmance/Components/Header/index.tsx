import React, { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { useClientStore } from "../../../../store/ClientStore";
import { ClientItem } from "./styles";

export const Header = () => {
  const { clientDetails, fetchClientDetails } = useClientStore();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchClientDetails();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <ClientItem>
        <h3>Performance</h3>
        <div className="top">
          <p>
            New clients (
            {isLoading ? (
              <ThreeDot color="#a6ada6" size="small" />
            ) : (
              clientDetails.length
            )}
            ){" "}
          </p>
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
      </ClientItem>
    </React.Fragment>
  );
};
