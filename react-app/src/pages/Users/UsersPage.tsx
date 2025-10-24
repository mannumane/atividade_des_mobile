import React from "react";
import { AdminShell } from "@components/layout/AdminShell";
import { DataTable, TableColumn } from "@components/common/DataTable";

interface UserRow extends Record<string, React.ReactNode> {
  readonly name: React.ReactNode;
  readonly email: React.ReactNode;
  readonly status: React.ReactNode;
  readonly actions: React.ReactNode;
}

class UserRecord {
  public constructor(
    private readonly label: string,
    private readonly email: string,
    private readonly status: "Ativo" | "Bloqueado"
  ) {}

  private actionLabel(): string {
    return this.status === "Ativo" ? "Bloquear" : "Desbloquear";
  }

  public toRow(): UserRow {
    return {
      name: this.label,
      email: this.email,
      status: this.status,
      actions: (
        <button className="btn btn--outline" type="button">
          {this.actionLabel()}
        </button>
      )
    };
  }
}

class UsersContent {
  private readonly users = [
    new UserRecord("Usuario #1", "email@teste.com", "Ativo"),
    new UserRecord("Usuario #2", "email@teste.com", "Ativo"),
    new UserRecord("Usuario #3", "email@teste.com", "Bloqueado"),
    new UserRecord("Usuario #4", "email@teste.com", "Ativo"),
    new UserRecord("Usuario #5", "email@teste.com", "Ativo")
  ];

  public rows(): UserRow[] {
    return this.users.map((user) => user.toRow());
  }
}

const columns: TableColumn<UserRow>[] = [
  { key: "name", label: "Usuario" },
  { key: "email", label: "E-mail" },
  { key: "status", label: "Status" },
  { key: "actions", label: "Acoes" }
];

export class UsersPage extends React.PureComponent {
  private readonly content = new UsersContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-users">
        <AdminShell currentPath="/usuarios">
          <section className="section">
            <h2>Usuarios</h2>
            <input
              aria-label="Buscar usuarios"
              placeholder="Buscar..."
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
