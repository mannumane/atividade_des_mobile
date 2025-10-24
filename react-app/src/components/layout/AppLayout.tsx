import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SiteHeader } from "@components/layout/SiteHeader";
import { SiteFooter } from "@components/layout/SiteFooter";
import { AppChrome } from "@models/appChrome";
import { NavigationItem } from "@app-types/app";

interface AppLayoutProps {
  readonly currentPath: string;
}

class AppLayoutView extends React.PureComponent<AppLayoutProps> {
  private readonly chrome = new AppChrome();

  private buildNavigation(): NavigationItem[] {
    return this.chrome.buildNavigation(this.props.currentPath);
  }

  public override render(): React.ReactNode {
    const navigation = this.buildNavigation();
    const footer = this.chrome.buildFooter();
    const brand = this.chrome.brand();

    return (
      <>
        <a className="skip-link" href="#conteudo">
          Pular para o conteudo
        </a>
        <SiteHeader brand={brand} navigation={navigation} />
        <main className="container" id="conteudo">
          <Outlet />
        </main>
        <SiteFooter chips={footer} />
      </>
    );
  }
}

export function AppLayout(): React.ReactElement {
  const location = useLocation();
  return <AppLayoutView currentPath={location.pathname} />;
}

export { AppLayoutView };
