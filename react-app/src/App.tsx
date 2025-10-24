import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "@components/layout/AppLayout";
import { routeRegistry } from "@routes/routeRegistry";
import "@routes/routes";

export default class App extends React.PureComponent {
  private renderChildRoutes(): React.ReactNode {
    return routeRegistry
      .getRoutes()
      .map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={React.createElement(route.component)}
        />
      ));
  }

  public override render(): React.ReactNode {
    return (
      <Routes>
        <Route element={<AppLayout />}>{this.renderChildRoutes()}</Route>
      </Routes>
    );
  }
}
