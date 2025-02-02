import { useState, useEffect } from "react";
import { Metric } from "./styles";
import { useMetricStore } from "../../../../store/MetricsStore";
import Skeleton from "react-loading-skeleton";

export const Metrics = () => {
  const [isLoading, setLoading] = useState(true);
  const { metrics, setMetrics } = useMetricStore();

  useEffect(() => {
    setMetrics();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Metric>
      {metrics.map((temp: any) => {
        return isLoading ? (
          <Skeleton containerClassName="div" height={100} />
        ) : (
          <div className="div">
            <h4>{temp.count}</h4>
            <p>{temp.label}</p>
          </div>
        );
      })}
    </Metric>
  );
};
