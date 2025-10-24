import React from "react";
import { SearchResultList } from "@components/common/SearchResultList";
import { SearchResult, SearchResultCollection } from "@models/content";

class SearchContent {
  private readonly results = new SearchResultCollection([
    new SearchResult("result-1", "Resultado 1: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-2", "Resultado 2: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-3", "Resultado 3: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-4", "Resultado 4: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-5", "Resultado 5: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-6", "Resultado 6: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-7", "Resultado 7: titulo de exemplo", "Categoria", "31 Jul 2025"),
    new SearchResult("result-8", "Resultado 8: titulo de exemplo", "Categoria", "31 Jul 2025")
  ]);

  public query(): string {
    return "trabalho remoto";
  }

  public list() {
    return this.results.list();
  }
}

export class SearchPage extends React.PureComponent {
  private readonly content = new SearchContent();

  public override render(): React.ReactNode {
    const query = this.content.query();
    return (
      <div className="page page-search">
        <section className="section">
          <h1>Resultados para: "{query}"</h1>
        </section>
        <section className="section">
          <SearchResultList results={this.content.list()} />
        </section>
      </div>
    );
  }
}
