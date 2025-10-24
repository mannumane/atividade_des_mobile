import React from "react";

interface PageSectionProps {
  readonly id?: string;
  readonly title?: string;
  readonly description?: React.ReactNode;
  readonly surface?: boolean;
  readonly children: React.ReactNode;
}

export class PageSection extends React.PureComponent<PageSectionProps> {
  public override render(): React.ReactNode {
    const { id, title, description, surface = false, children } = this.props;
    const className = surface ? "section surface" : "section";

    return (
      <section className={className} id={id}>
        {title ? <h2>{title}</h2> : null}
        {description ? <p className="muted">{description}</p> : null}
        {children}
      </section>
    );
  }
}
