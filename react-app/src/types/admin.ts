export interface AdminNavItem {
  readonly label: string;
  readonly path: string;
  readonly ariaCurrent?: "page";
}

export interface AdminMetricSnapshot {
  readonly metrics: ReadonlyArray<{
    readonly id: string;
    readonly label: string;
    readonly value: string;
  }>;
}
