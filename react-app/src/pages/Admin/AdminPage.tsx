import React from "react";
import { AdminShell } from "@components/layout/AdminShell";

export class AdminPage extends React.PureComponent {
  public override render(): React.ReactNode {
    return (
      <div className="page page-admin">
        <AdminShell currentPath="/admin">{null}</AdminShell>
      </div>
    );
  }
}
