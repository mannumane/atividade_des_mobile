import React from "react";
import { AdminShell } from "@components/layout/AdminShell";

class CreatePostFormModel {
  public readonly titleLabel = "Titulo";
  public readonly contentLabel = "Conteudo";
  public readonly contentPlaceholder = "Escreva aqui... (editor simulado)";
  public readonly tagsPlaceholder = "Categorias e tags";
  public readonly coverPlaceholder = "Upload da imagem de capa";

  public readonly actions = [
    { id: "save-draft", label: "Salvar rascunho", variant: "outline" },
    { id: "submit-review", label: "Enviar para revisao", variant: "outline" },
    { id: "publish", label: "Publicar (admin)", variant: "primary" }
  ] as const;
}

export class CreatePostPage extends React.PureComponent {
  private readonly form = new CreatePostFormModel();

  public override render(): React.ReactNode {
    return (
      <div className="page page-create-post">
        <AdminShell currentPath="/criar-post">
          <section className="section">
            <h2>Criar Post</h2>
            <div className="surface">
              <form className="stack-lg">
                <div className="form-group">
                  <label htmlFor="titulo">{this.form.titleLabel}</label>
                  <input id="titulo" name="titulo" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="conteudo">{this.form.contentLabel}</label>
                  <textarea
                    id="conteudo"
                    name="conteudo"
                    placeholder={this.form.contentPlaceholder}
                    rows={10}
                  />
                </div>
                <div className="form-grid">
                  <input
                    aria-label={this.form.tagsPlaceholder}
                    placeholder={this.form.tagsPlaceholder}
                    type="text"
                  />
                  <input
                    aria-label={this.form.coverPlaceholder}
                    placeholder={this.form.coverPlaceholder}
                    type="text"
                  />
                </div>
                <div className="cluster">
                  {this.form.actions.map((action) => (
                    <button
                      className={
                        action.variant === "primary"
                          ? "btn btn--primary"
                          : "btn btn--outline"
                      }
                      key={action.id}
                      type={action.variant === "primary" ? "submit" : "button"}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </form>
            </div>
          </section>
        </AdminShell>
      </div>
    );
  }
}
