import { FooterChipsDeck, FooterChip } from "@models/footer";
import { NavigationLink, NavigationMenu } from "@models/navigation";
import { FooterLink, NavigationItem } from "@app-types/app";

export class AppChrome {
  private readonly navigation: NavigationMenu;
  private readonly footer: FooterChipsDeck;

  public constructor() {
    this.navigation = new NavigationMenu([
      new NavigationLink("Inicio", "/"),
      new NavigationLink("Paginas", "/navegacao"),
      new NavigationLink("Destaques", "/destaques"),
      new NavigationLink("Assinar", "/newsletter"),
      new NavigationLink("Admin", "/admin")
    ]);

    this.footer = new FooterChipsDeck([
      new FooterChip("Instagram"),
      new FooterChip("Work"),
      new FooterChip("Bags"),
      new FooterChip("Lamp"),
      new FooterChip("Books")
    ]);
  }

  public buildNavigation(currentPath: string): NavigationItem[] {
    return this.navigation.build(currentPath);
  }

  public buildFooter(): FooterLink[] {
    return this.footer.list();
  }

  public brand(): string {
    return "HABIT";
  }
}
