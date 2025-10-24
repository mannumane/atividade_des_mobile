import React from "react";
import { NavigationItem } from "@app-types/app";
import { PrimaryNav } from "@components/navigation/PrimaryNav";
import { ButtonLink } from "@components/common/ButtonLink";

interface SiteHeaderProps {
  readonly brand: string;
  readonly navigation: NavigationItem[];
}

export class SiteHeader extends React.PureComponent<SiteHeaderProps> {
  public override render(): React.ReactNode {
    const { brand, navigation } = this.props;

    return (
      <header className="site-header">
        <div className="container inner">
          <div className="brand">{brand}</div>
          <PrimaryNav items={navigation} />
          <div className="header-actions">
            <input
              className="search-input"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar"
            />
            <ButtonLink variant="outline" to="/busca">
              Buscar
            </ButtonLink>
            <ButtonLink variant="outline" to="/login">
              Entrar
            </ButtonLink>
          </div>
        </div>
      </header>
    );
  }
}
