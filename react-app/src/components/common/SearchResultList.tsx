import React from "react";
import { SearchResultView } from "@app-types/content";

interface SearchResultListProps {
  readonly results: SearchResultView[];
}

export class SearchResultList extends React.PureComponent<SearchResultListProps> {
  public override render(): React.ReactNode {
    const { results } = this.props;

    return (
      <>
        {results.map((result) => (
          <article className="search-result" key={result.id}>
            <div aria-hidden="true" className="thumb-sm" />
            <div>
              <h3>{result.title}</h3>
              <div className="meta">
                {result.category} - {result.publishedAt}
              </div>
            </div>
          </article>
        ))}
      </>
    );
  }
}
