import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { ThreeDot } from "react-loading-indicators";
import { useProgressStore } from "../../../../store/ProgressStore";
import { ProgressContainer } from "./styles";

export const Progress = () => {
  const { progressDetails, fetchProgressDetails } = useProgressStore();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchProgressDetails();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      <ProgressContainer>
        <h5>Your Progress</h5>
        {progressDetails.map((progress) => {
          return (
            <div className="row">
              <div className="details">
                <div className="title">
                  {isLoading ? (
                    <ThreeDot color="wheat" size="small" />
                  ) : (
                    progress.name
                  )}
                </div>
                <div className="value">
                  {isLoading ? (
                    <ThreeDot color="wheat" size="small" />
                  ) : (
                    "$ " + progress.income
                  )}
                </div>
              </div>
              <div className="line"></div>
              <div className="details2">
                <div className="title">
                  <FaShoppingBasket />{" "}
                  {isLoading ? (
                    <ThreeDot color="wheat" size="small" />
                  ) : (
                    progress.sold + " orders"
                  )}
                </div>
                <div
                  className={
                    isLoading
                      ? ""
                      : progress.profitorloss
                      ? "badge positive"
                      : "badge negative"
                  }
                >
                  {isLoading ? (
                    <ThreeDot color="wheat" size="small" />
                  ) : (
                    (progress.percentage > 0
                      ? "+" + progress.percentage
                      : progress.percentage) + "%"
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </ProgressContainer>
    </React.Fragment>
  );
};
