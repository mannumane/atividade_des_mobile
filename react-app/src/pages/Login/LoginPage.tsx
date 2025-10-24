import React from "react";
import { FormRenderer } from "@components/common/FormRenderer";
import { FormField, FormSchema } from "@models/content";

class LoginForm {
  private readonly schema = new FormSchema([
    new FormField("email", "E-mail", "email"),
    new FormField("senha", "Senha", "password")
  ]);

  public fields() {
    return this.schema.list();
  }
}

export class LoginPage extends React.PureComponent {
  private readonly form = new LoginForm();

  public override render(): React.ReactNode {
    return (
      <div className="page page-login">
        <FormRenderer
          description="Entre com sua conta HABIT para acessar os conteudos."
          fields={this.form.fields()}
          hideSubmitButton
          layout="stack"
          title="Entrar"
        >
          <div className="cluster" style={{ marginBottom: "var(--space-lg)" }}>
            <button className="btn btn--primary" type="submit">
              Entrar
            </button>
            <button className="btn btn--outline" type="button">
              Entrar com Google
            </button>
          </div>
          <p style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
            <a href="#esqueci">Esqueci a senha</a> · <a href="/signup">Criar conta</a>
          </p>
        </FormRenderer>
      </div>
    );
  }
}
