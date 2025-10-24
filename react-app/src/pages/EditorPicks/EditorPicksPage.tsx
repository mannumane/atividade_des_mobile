import React from "react";
import { AdminShell } from "@components/layout/AdminShell";
import { DataTable, TableColumn } from "@components/common/DataTable";

interface EditorPickRow extends Record<string, React.ReactNode> {
  readonly post: React.ReactNode;
  readonly actions: React.ReactNode;
}

class EditorPick {
  public constructor(
    private readonly label: string,
    private readonly actionLabel: string,
    private readonly variant: "primary" | "outline"
  ) {}

  public toRow(): EditorPickRow {
    return {
      post: this.label,
      actions: (
        <button
          className={
            this.variant === "primary" ? "btn btn--primary" : "btn btn--outline"
          }
          type="button"
        >
          {this.actionLabel}
        </button>
      )
    };
  }
}

class EditorPickContent {
  private readonly picks = [
    new EditorPick("Post #1", "Remover", "outline"),
    new EditorPick("Post #2", "Agendar", "primary"),
    new EditorPick("Post #3", "Agendar", "primary"),
    new EditorPick("Post #4", "Remover", "outline"),
    new EditorPick("Post #5", "Agendar", "primary")
  ];

  public rows(): EditorPickRow[] {
    return this.picks.map((pick) => pick.toRow());
  }
}

const columns: TableColumn<EditorPickRow>[] = [
  { key: "post", label: "Post" },
  { key: "actions", label: "Acoes" }
];

export class EditorPicksPage extends React.PureComponent {
  private readonly content = new EditorPickContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-editor-picks">
        <AdminShell currentPath="/escolhas-editor">
          <section className="section">
            <h2>Escolhas do Editor</h2>
            <input
              aria-label="Buscar posts"
              placeholder="Buscar posts..."
              style={{ marginBottom: "var(--space-lg)" }}
              type="search"
            />
            <DataTable
              columns={columns}
              rows={this.content.rows()}
              title="Post"
            />
          </section>
        </AdminShell>
      </div>
    );
  }
}
