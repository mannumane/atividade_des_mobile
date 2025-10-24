import React from "react";
import { FooterLink } from "@app-types/app";

interface SiteFooterProps {
  readonly chips: FooterLink[];
}

export class SiteFooter extends React.PureComponent<SiteFooterProps> {
  public override render(): React.ReactNode {
    const { chips } = this.props;

    return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-chips">
              {chips.map((chip) => (
                <span className="footer-chip" key={chip.label}>
                  {chip.label}
                </span>
              ))}
            </div>
            <small>&copy; 2025 Meu Site &middot; Meu site</small>
          </div>
        </div>
      </footer>
    );
  }
}
