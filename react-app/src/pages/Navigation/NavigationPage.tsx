import React from "react";
import { PageSection } from "@components/common/PageSection";
import { CardGallery } from "@components/common/CardGallery";
import { CardLink, CardLinkCollection } from "@models/content";

class NavigationContent {
  private readonly cards = new CardLinkCollection([
    new CardLink("home", "Home", "/assets/page1.png", "/"),
    new CardLink(
      "categoria-techno",
      "Categoria Techno",
      "/assets/page2.png",
      "/categoria-techno"
    ),
    new CardLink("destaques", "Destaques", "/assets/page3.png", "/destaques"),
    new CardLink("admin", "Admin Dashboard", "/assets/page4.png", "/admin"),
    new CardLink(
      "editor",
      "Escolhas do Editor",
      "/assets/page5.png",
      "/escolhas-editor"
    ),
    new CardLink(
      "categorias",
      "Categorias",
      "/assets/page6.png",
      "/categorias"
    ),
    new CardLink("criar-post", "Criar Post", "/assets/page7.png", "/criar-post"),
    new CardLink(
      "newsletter",
      "Newsletter",
      "/assets/page8.png",
      "/newsletter"
    ),
    new CardLink("signup", "Criar Conta", "/assets/page9.png", "/signup"),
    new CardLink("login", "Entrar", "/assets/page10.png", "/login"),
    new CardLink(
      "fila-revisao",
      "Fila de Revisao",
      "/assets/page11.png",
      "/fila-revisao"
    ),
    new CardLink(
      "fila-comentarios",
      "Fila de Comentarios",
      "/assets/page12.png",
      "/fila-comentarios"
    ),
    new CardLink("usuarios", "Usuarios", "/assets/page13.png", "/usuarios"),
    new CardLink("perfil", "Perfil", "/assets/page14.png", "/perfil"),
    new CardLink("busca", "Busca", "/assets/page14.png", "/busca")
  ]);

  public list() {
    return this.cards.list();
  }
}

export class NavigationPage extends React.PureComponent {
  private readonly content = new NavigationContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-navigation">
        <section className="section">
          <h1>Telas recriadas</h1>
          <p className="muted">
            Selecione uma tela para visualizar a reconstrucao em React.
          </p>
        </section>
        <PageSection surface title="Lista de telas">
          <CardGallery cards={this.content.list()} />
        </PageSection>
      </div>
    );
  }
}
