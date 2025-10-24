import { Metric, MetricCollection } from "@models/content";
import { MetricView } from "@app-types/content";
import { AdminNavItem } from "@app-types/admin";

class AdminMenuEntry {
  public constructor(
    private readonly label: string,
    private readonly path: string
  ) {}

  public toNavItem(currentPath: string): AdminNavItem {
    const isActive = currentPath === this.path;
    return {
      label: this.label,
      path: this.path,
      ariaCurrent: isActive ? "page" : undefined
    };
  }
}

class AdminMenu {
  public constructor(private readonly entries: readonly AdminMenuEntry[]) {}

  public build(currentPath: string): AdminNavItem[] {
    return this.entries.map((entry) => entry.toNavItem(currentPath));
  }
}

export class AdminChrome {
  private readonly menu: AdminMenu;
  private readonly metrics: MetricCollection;

  public constructor() {
    this.menu = new AdminMenu([
      new AdminMenuEntry("Categorias", "/categorias"),
      new AdminMenuEntry("Criar Post", "/criar-post"),
      new AdminMenuEntry("Escolhas do Editor", "/escolhas-editor"),
      new AdminMenuEntry("Usuarios", "/usuarios"),
      new AdminMenuEntry("Fila de revisao", "/fila-revisao"),
      new AdminMenuEntry("Fila de comentarios", "/fila-comentarios")
    ]);

    this.metrics = new MetricCollection([
      new Metric("posts", "Posts", "128"),
      new Metric("views", "Visualizacoes", "54k"),
      new Metric("subscribers", "Inscritos", "12k"),
      new Metric("pending", "Pendencias", "7")
    ]);
  }

  public buildMenu(currentPath: string): AdminNavItem[] {
    return this.menu.build(currentPath);
  }

  public snapshotMetrics(): MetricView[] {
    return this.metrics.list();
  }
}
