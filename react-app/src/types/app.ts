import type { ComponentType } from "react";

export type PageComponent = ComponentType<Record<string, never>>;

export interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly ariaCurrent?: "page";
}

export interface FooterLink {
  readonly label: string;
}
