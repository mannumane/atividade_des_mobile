import React from "react";

interface EditorPickListProps {
  readonly items: string[];
}

export class EditorPickList extends React.PureComponent<EditorPickListProps> {
  public override render(): React.ReactNode {
    const { items } = this.props;

    return (
      <ul className="list-unstyled stack-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}
