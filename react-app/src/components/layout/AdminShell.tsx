import React from "react";
import { AdminSidebar } from "@components/layout/AdminSidebar";
import { MetricGrid } from "@components/common/MetricGrid";
import { AdminChrome } from "@models/admin";
import { MetricView } from "@app-types/content";

interface AdminShellProps {
  readonly currentPath: string;
  readonly children: React.ReactNode;
  readonly metrics?: MetricView[];
}

class AdminShellView extends React.PureComponent<AdminShellProps> {
  private readonly chrome = new AdminChrome();

  private resolveMetrics(): MetricView[] {
    return this.props.metrics ?? this.chrome.snapshotMetrics();
  }

  public override render(): React.ReactNode {
    const { currentPath, children } = this.props;
    const menuItems = this.chrome.buildMenu(currentPath);
    const metrics = this.resolveMetrics();

    return (
      <div className="admin-layout">
        <AdminSidebar items={menuItems} />
        <div>
          <MetricGrid metrics={metrics} />
          {children}
        </div>
      </div>
    );
  }
}

export function AdminShell(props: AdminShellProps): React.ReactElement {
  return <AdminShellView {...props} />;
}
