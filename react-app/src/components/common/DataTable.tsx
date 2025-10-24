import React from "react";

export interface TableColumn<T> {
  readonly key: keyof T;
  readonly label: string;
}

interface DataTableProps<T extends Record<string, React.ReactNode>> {
  readonly caption?: string;
  readonly title?: string;
  readonly columns: TableColumn<T>[];
  readonly rows: T[];
}

export class DataTable<T extends Record<string, React.ReactNode>> extends React.PureComponent<DataTableProps<T>> {
  public override render(): React.ReactNode {
    const { caption, title, columns, rows } = this.props;

    return (
      <div className="surface">
        {title ? <h3>{title}</h3> : null}
        <table className="data-table">
          {caption ? <caption>{caption}</caption> : null}
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} scope="col">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={String(column.key)}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
