import React from "react";
import { PageSection } from "@components/common/PageSection";
import { ButtonLink } from "@components/common/ButtonLink";
import { CategoryHighlightList } from "@components/common/CategoryHighlightList";
import { ChipGroup } from "@components/common/ChipGroup";
import { PostList } from "@components/common/PostList";
import { EditorPickList } from "@components/common/EditorPickList";
import {
  Category,
  CategoryCollection,
  PostCollection,
  PostSummary
} from "@models/content";

class HomeContent {
  private readonly categories = new CategoryCollection([
    new Category("negocios", "Negocios", true),
    new Category("techno", "Techno", true),
    new Category("produtividade", "Produtividade"),
    new Category("filmes", "Filmes"),
    new Category("lifestyle", "Lifestyle"),
    new Category("educacao", "Educacao"),
    new Category("mailing", "Mailing"),
    new Category("ecommerce", "eCommerce"),
    new Category("alimentacao", "Alimentacao"),
    new Category("social", "Social"),
    new Category("work", "Work", true),
    new Category("books", "Books", true)
  ]);

  private readonly featuredPosts = new PostCollection([
    new PostSummary(
      "post-1",
      "Erros de Design que Todos Devem Evitar",
      "31 Jul 2025 · Destaque · 3 min de leitura"
    ),
    new PostSummary(
      "post-2",
      "As Maiores Empresas por Receita",
      "31 Jul 2025 · Destaque · 3 min de leitura"
    )
  ]);

  private readonly editorPicks: string[] = [
    "O uso negativo da internet",
    "O segredo do brainstorm",
    "Escalar para pequenos negocios",
    "O futuro do trabalho remoto"
  ];

  public popularCategories() {
    return this.categories.listPopular();
  }

  public allCategories() {
    return this.categories.list();
  }

  public featured() {
    return this.featuredPosts.list();
  }

  public editorHighlights() {
    return [...this.editorPicks];
  }
}

export class HomePage extends React.PureComponent {
  private readonly content = new HomeContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-home">
        <section className="section hero">
          <div>
            <h1>Navegue por topicos de interesse</h1>
            <p className="muted">
              Descubra conteudos por categorias, posts em destaque e as
              escolhas do editor.
            </p>
            <div className="cluster" style={{ marginTop: "var(--space-md)" }}>
              <ButtonLink to="#categorias">Explorar categorias</ButtonLink>
              <ButtonLink to="/newsletter" variant="outline">
                Assine a newsletter
              </ButtonLink>
            </div>
          </div>
          <div aria-hidden="true" className="hero-media" />
        </section>

        <PageSection id="populares" title="Categorias Populares">
          <CategoryHighlightList items={this.content.popularCategories()} />
        </PageSection>

        <PageSection id="categorias" title="Todas as Categorias">
          <ChipGroup items={this.content.allCategories()} />
        </PageSection>

        <section className="section two-col">
          <div>
            <h2>Postagens em Destaque</h2>
            <PostList posts={this.content.featured()} />
          </div>
          <aside className="surface">
            <h2>Escolhas do Editor</h2>
            <EditorPickList items={this.content.editorHighlights()} />
          </aside>
        </section>
      </div>
    );
  }
}
