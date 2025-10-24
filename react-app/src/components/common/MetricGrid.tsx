import React from "react";
import { MetricView } from "@app-types/content";

interface MetricGridProps {
  readonly metrics: MetricView[];
}

export class MetricGrid extends React.PureComponent<MetricGridProps> {
  public override render(): React.ReactNode {
    const { metrics } = this.props;

    return (
      <div className="metrics">
        {metrics.map((metric) => (
          <div className="metric-card" key={metric.id}>
            <div className="metric-label">{metric.label}</div>
            <div className="metric-value">{metric.value}</div>
          </div>
        ))}
      </div>
    );
  }
}
