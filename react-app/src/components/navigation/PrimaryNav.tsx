import React from "react";
import { Link } from "react-router-dom";
import { NavigationItem } from "@app-types/app";

interface PrimaryNavProps {
  readonly items: NavigationItem[];
}

export class PrimaryNav extends React.PureComponent<PrimaryNavProps> {
  public override render(): React.ReactNode {
    const { items } = this.props;

    return (
      <nav className="primary-nav" aria-label="Navegacao principal">
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <Link aria-current={item.ariaCurrent} to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
