import React from "react";
import { CategoryPostView } from "@app-types/content";

interface GridPostListProps {
  readonly posts: CategoryPostView[];
}

export class GridPostList extends React.PureComponent<GridPostListProps> {
  public override render(): React.ReactNode {
    const { posts } = this.props;

    return (
      <div className="card-grid">
        {posts.map((post) => (
          <article className="grid-card" key={post.id}>
            <div aria-hidden="true" className="thumb-lg" />
            <h3>{post.title}</h3>
            {post.date ? (
              <div className="post-meta muted">{post.date}</div>
            ) : null}
          </article>
        ))}
      </div>
    );
  }
}
