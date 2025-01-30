import { create } from "zustand";
import metricDetails from '../DummyDetails/metrics';
interface Metric {
    count: string;
    label: string;
}
interface MetricStore {
    metrics : Metric[];
    setMetrics: () => void;
}

export const useMetricStore = create<MetricStore>((set) => ({
    metrics: [],
    setMetrics: () => set({
        metrics : metricDetails
    })
}));