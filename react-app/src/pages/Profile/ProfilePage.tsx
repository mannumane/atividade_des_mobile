import React from "react";
import { PostList } from "@components/common/PostList";
import { PostCollection, PostSummary } from "@models/content";

class ProfilePosts {
  private readonly posts = new PostCollection([
    new PostSummary("post-1", "Post 1", "Rascunho"),
    new PostSummary("post-2", "Post 2", "Publicado"),
    new PostSummary("post-3", "Comentario 1", "Em analise"),
    new PostSummary("post-4", "Comentario 2", "Publicado")
  ]);

  public list() {
    return this.posts.list();
  }
}

export class ProfilePage extends React.PureComponent {
  private readonly posts = new ProfilePosts();

  public override render(): React.ReactNode {
    return (
      <div className="page page-profile">
        <section className="section two-col">
          <aside className="surface">
            <h2>Perfil</h2>
            <div
              aria-hidden="true"
              className="thumb-lg"
              style={{ marginBottom: "var(--space-lg)", height: "120px" }}
            />
            <form className="stack-md">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio" rows={3} />
              </div>
              <button className="btn btn--primary" type="submit">
                Salvar
              </button>
            </form>
          </aside>
          <div>
            <h2>Suas Postagens</h2>
            <PostList posts={this.posts.list()} />
          </div>
        </section>
      </div>
    );
  }
}
