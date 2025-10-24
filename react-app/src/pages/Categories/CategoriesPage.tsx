import React from "react";
import { AdminShell } from "@components/layout/AdminShell";
import { DataTable, TableColumn } from "@components/common/DataTable";

interface CategoryRow extends Record<string, React.ReactNode> {
  readonly category: React.ReactNode;
  readonly actions: React.ReactNode;
}

class CategoryRecord {
  public constructor(private readonly label: string) {}

  public toRow(): CategoryRow {
    return {
      category: this.label,
      actions: (
        <div className="cluster">
          <button className="btn btn--outline" type="button">
            Editar
          </button>
          <button className="btn btn--outline" type="button">
            Excluir
          </button>
        </div>
      )
    };
  }
}

class CategoriesContent {
  private readonly categories = [
    new CategoryRecord("Categoria #1"),
    new CategoryRecord("Categoria #2"),
    new CategoryRecord("Categoria #3"),
    new CategoryRecord("Categoria #4"),
    new CategoryRecord("Categoria #5")
  ];

  public rows(): CategoryRow[] {
    return this.categories.map((category) => category.toRow());
  }
}

const columns: TableColumn<CategoryRow>[] = [
  { key: "category", label: "Categoria" },
  { key: "actions", label: "Acoes" }
];

export class CategoriesPage extends React.PureComponent {
  private readonly content = new CategoriesContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-categories">
        <AdminShell currentPath="/categorias">
          <section className="section">
            <h2>Categorias</h2>
            <input
              aria-label="Buscar categorias"
              placeholder="Buscar categorias..."
              style={{ marginBottom: "var(--space-lg)" }}
              type="search"
            />
            <DataTable
              columns={columns}
              rows={this.content.rows()}
              title="Categoria"
            />
          </section>
        </AdminShell>
      </div>
    );
  }
}
