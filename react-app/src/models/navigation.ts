import { NavigationItem } from "@app-types/app";

export class NavigationLink {
  public constructor(
    private readonly label: string,
    private readonly path: string,
    private readonly exact: boolean = true
  ) {}

  public toNavigationItem(currentPath: string): NavigationItem {
    const isActive = this.exact
      ? currentPath === this.path
      : currentPath.startsWith(this.path);

    return {
      label: this.label,
      path: this.path,
      ariaCurrent: isActive ? "page" : undefined
    };
  }
}

export class NavigationMenu {
  public constructor(private readonly links: readonly NavigationLink[]) {}

  public build(currentPath: string): NavigationItem[] {
    return this.links.map((link) => link.toNavigationItem(currentPath));
  }
}
