import React from "react";
import { FilterTagGroup } from "@components/common/FilterTagGroup";
import { GridPostList } from "@components/common/GridPostList";
import {
  CategoryPost,
  CategoryPostCollection,
  FilterTag,
  FilterTagCollection
} from "@models/content";

class TechnoCategoryContent {
  private readonly filters = new FilterTagCollection([
    new FilterTag("popular", "Popular"),
    new FilterTag("recentes", "Mais recentes"),
    new FilterTag("ia", "IA"),
    new FilterTag("produtividade", "Produtividade")
  ]);

  private readonly posts = new CategoryPostCollection([
    new CategoryPost("post-1", "Titulo da Postagem 1", "31 Jul 2025"),
    new CategoryPost("post-2", "Titulo da Postagem 2", "31 Jul 2025"),
    new CategoryPost("post-3", "Titulo da Postagem 3", "31 Jul 2025"),
    new CategoryPost("post-4", "Titulo da Postagem 4", "31 Jul 2025"),
    new CategoryPost("post-5", "Titulo da Postagem 5", "31 Jul 2025"),
    new CategoryPost("post-6", "Titulo da Postagem 6", "31 Jul 2025"),
    new CategoryPost("post-7", "Titulo da Postagem 7", "31 Jul 2025"),
    new CategoryPost("post-8", "Titulo da Postagem 8", "31 Jul 2025"),
    new CategoryPost("post-9", "Titulo da Postagem 9", "31 Jul 2025")
  ]);

  public filterTags() {
    return this.filters.list();
  }

  public postsGrid() {
    return this.posts.list();
  }
}

export class CategoryTechnoPage extends React.PureComponent {
  private readonly content = new TechnoCategoryContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-category-techno">
        <section className="section">
          <h1>Categoria: Techno</h1>
          <FilterTagGroup label="Filtros" tags={this.content.filterTags()} />
        </section>
        <section className="section">
          <GridPostList posts={this.content.postsGrid()} />
          <div className="center">
            <a className="btn btn--outline load-more" href="#">
              Carregar mais
            </a>
          </div>
        </section>
      </div>
    );
  }
}
