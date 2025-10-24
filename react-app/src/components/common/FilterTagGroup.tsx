import React from "react";
import { FilterTagView } from "@app-types/content";

interface FilterTagGroupProps {
  readonly label?: string;
  readonly tags: FilterTagView[];
}

export class FilterTagGroup extends React.PureComponent<FilterTagGroupProps> {
  public override render(): React.ReactNode {
    const { label, tags } = this.props;

    return (
      <div className="filters" role="group" aria-label={label}>
        {tags.map((tag) => (
          <span className="filter" key={tag.id}>
            {tag.label}
          </span>
        ))}
      </div>
    );
  }
}
