import React from "react";
import { AdminShell } from "@components/layout/AdminShell";
import { DataTable, TableColumn } from "@components/common/DataTable";

interface ReviewRow extends Record<string, React.ReactNode> {
  readonly title: React.ReactNode;
  readonly author: React.ReactNode;
  readonly status: React.ReactNode;
  readonly actions: React.ReactNode;
}

class ReviewItem {
  public constructor(
    private readonly title: string,
    private readonly author: string,
    private readonly status: string
  ) {}

  public toRow(): ReviewRow {
    return {
      title: this.title,
      author: this.author,
      status: this.status,
      actions: (
        <div className="cluster">
          <button className="btn btn--outline" type="button">
            Aprovar
          </button>
          <button className="btn btn--outline" type="button">
            Reprovar
          </button>
        </div>
      )
    };
  }
}

class ReviewQueueContent {
  private readonly items = [
    new ReviewItem("Post #1", "Autor 1", "Em revisao"),
    new ReviewItem("Post #2", "Autor 2", "Em revisao"),
    new ReviewItem("Post #3", "Autor 3", "Em revisao"),
    new ReviewItem("Post #4", "Autor 4", "Em revisao"),
    new ReviewItem("Post #5", "Autor 5", "Em revisao")
  ];

  public rows(): ReviewRow[] {
    return this.items.map((item) => item.toRow());
  }
}

const columns: TableColumn<ReviewRow>[] = [
  { key: "title", label: "Titulo" },
  { key: "author", label: "Autor" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Acoes" }
];

export class ReviewQueuePage extends React.PureComponent {
  private readonly content = new ReviewQueueContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-review-queue">
        <AdminShell currentPath="/fila-revisao">
          <section className="section">
            <h2>Fila de revisao</h2>
            <input
              aria-label="Buscar posts"
              placeholder="Buscar posts..."
              style={{ marginBottom: "var(--space-lg)" }}
              type="search"
            />
            <DataTable columns={columns} rows={this.content.rows()} />
          </section>
        </AdminShell>
      </div>
    );
  }
}
