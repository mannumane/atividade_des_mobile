import React from "react";
import { FormRenderer } from "@components/common/FormRenderer";
import { FormField, FormSchema } from "@models/content";

class SignupForm {
  private readonly schema = new FormSchema([
    new FormField("nome", "Nome completo", "text"),
    new FormField("email", "E-mail", "email"),
    new FormField("senha", "Senha", "password"),
    new FormField("confirmar-senha", "Confirmar senha", "password"),
    new FormField(
      "termos",
      "Concordo com os termos e a politica de privacidade",
      "checkbox"
    )
  ]);

  public fields() {
    return this.schema.list();
  }
}

export class SignupPage extends React.PureComponent {
  private readonly form = new SignupForm();

  public override render(): React.ReactNode {
    return (
      <div className="page page-signup">
        <FormRenderer
          actionsAlignment="start"
          fields={this.form.fields()}
          layout="stack"
          submitFullWidth
          submitLabel="Cadastrar"
          title="Criar Conta"
        />
      </div>
    );
  }
}
