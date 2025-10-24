import { PageComponent } from "@app-types/app";

export class RouteDefinition {
  public constructor(
    public readonly path: string,
    public readonly component: PageComponent
  ) {}
}

export class RouteRegistry {
  private readonly routes: RouteDefinition[] = [];

  public register(route: RouteDefinition): void {
    this.routes.push(route);
  }

  public getRoutes(): ReadonlyArray<RouteDefinition> {
    return [...this.routes];
  }
}

export const routeRegistry = new RouteRegistry();
