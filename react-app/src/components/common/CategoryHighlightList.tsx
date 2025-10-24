import React from "react";
import { CategoryView } from "@app-types/content";

interface CategoryHighlightListProps {
  readonly items: CategoryView[];
}

export class CategoryHighlightList extends React.PureComponent<CategoryHighlightListProps> {
  public override render(): React.ReactNode {
    const { items } = this.props;

    return (
      <div className="category-cards">
        {items.map((item) => (
          <div className="category-card" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}
