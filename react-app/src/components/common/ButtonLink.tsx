import React from "react";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "outline";

interface ButtonLinkProps {
  readonly to: string;
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
}

export class ButtonLink extends React.PureComponent<ButtonLinkProps> {
  public override render(): React.ReactNode {
    const { to, children, variant = "primary" } = this.props;
    const className =
      variant === "primary" ? "btn btn--primary" : "btn btn--outline";

    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }
}
