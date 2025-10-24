import React from "react";
import { PostSummaryView } from "@app-types/content";

interface PostListProps {
  readonly posts: PostSummaryView[];
}

export class PostList extends React.PureComponent<PostListProps> {
  public override render(): React.ReactNode {
    const { posts } = this.props;

    return (
      <div className="post-list">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <div className="thumb" aria-hidden="true" />
            <div>
              <div className="post-meta muted">{post.meta}</div>
              <h3>{post.title}</h3>
            </div>
          </article>
        ))}
      </div>
    );
  }
}
