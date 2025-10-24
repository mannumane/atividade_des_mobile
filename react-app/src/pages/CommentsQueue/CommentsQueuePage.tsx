import React from "react";
import { AdminShell } from "@components/layout/AdminShell";
import { DataTable, TableColumn } from "@components/common/DataTable";

interface CommentRow extends Record<string, React.ReactNode> {
  readonly title: React.ReactNode;
  readonly author: React.ReactNode;
  readonly status: React.ReactNode;
  readonly actions: React.ReactNode;
}

class CommentItem {
  public constructor(
    private readonly title: string,
    private readonly author: string,
    private readonly status: string
  ) {}

  public toRow(): CommentRow {
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

class CommentsQueueContent {
  private readonly items = [
    new CommentItem("Comentario #1", "Usuario 1", "Em revisao"),
    new CommentItem("Comentario #2", "Usuario 2", "Em revisao"),
    new CommentItem("Comentario #3", "Usuario 3", "Em revisao"),
    new CommentItem("Comentario #4", "Usuario 4", "Em revisao"),
    new CommentItem("Comentario #5", "Usuario 5", "Em revisao")
  ];

  public rows(): CommentRow[] {
    return this.items.map((item) => item.toRow());
  }
}

const columns: TableColumn<CommentRow>[] = [
  { key: "title", label: "Titulo" },
  { key: "author", label: "Autor" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Acoes" }
];

export class CommentsQueuePage extends React.PureComponent {
  private readonly content = new CommentsQueueContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-comments-queue">
        <AdminShell currentPath="/fila-comentarios">
          <section className="section">
            <h2>Fila de comentarios</h2>
            <input
              aria-label="Buscar comentarios"
              placeholder="Buscar comentarios..."
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
