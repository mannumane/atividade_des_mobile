import { FooterLink } from "@app-types/app";

export class FooterChip {
  public constructor(private readonly label: string) {}

  public toFooterLink(): FooterLink {
    return { label: this.label };
  }
}

export class FooterChipsDeck {
  public constructor(private readonly chips: readonly FooterChip[]) {}

  public list(): FooterLink[] {
    return this.chips.map((chip) => chip.toFooterLink());
  }
}
