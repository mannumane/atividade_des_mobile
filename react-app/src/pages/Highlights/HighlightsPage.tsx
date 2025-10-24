import React from "react";
import { GridPostList } from "@components/common/GridPostList";
import { CategoryPost, CategoryPostCollection } from "@models/content";

class HighlightsContent {
  private readonly posts = new CategoryPostCollection([
    new CategoryPost("highlight-1", "Destaque 1", ""),
    new CategoryPost("highlight-2", "Destaque 2", ""),
    new CategoryPost("highlight-3", "Destaque 3", ""),
    new CategoryPost("highlight-4", "Destaque 4", ""),
    new CategoryPost("highlight-5", "Destaque 5", ""),
    new CategoryPost("highlight-6", "Destaque 6", ""),
    new CategoryPost("highlight-7", "Destaque 7", ""),
    new CategoryPost("highlight-8", "Destaque 8", ""),
    new CategoryPost("highlight-9", "Destaque 9", "")
  ]);

  public list() {
    return this.posts.list();
  }
}

export class HighlightsPage extends React.PureComponent {
  private readonly content = new HighlightsContent();

  public override render(): React.ReactNode {
    return (
      <div className="page page-highlights">
        <section className="section">
          <h1>Destaques</h1>
        </section>
        <section className="section">
          <GridPostList posts={this.content.list()} />
        </section>
      </div>
    );
  }
}
