import React from "react";
import { CategoryView } from "@app-types/content";

interface ChipGroupProps {
  readonly items: CategoryView[];
}

export class ChipGroup extends React.PureComponent<ChipGroupProps> {
  public override render(): React.ReactNode {
    const { items } = this.props;

    return (
      <div className="chips">
        {items.map((item) => (
          <span className="chip" key={item.id}>
            {item.name}
          </span>
        ))}
      </div>
    );
  }
}
