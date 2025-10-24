import React from "react";
import { FormRenderer } from "@components/common/FormRenderer";
import { FormField, FormSchema } from "@models/content";

class NewsletterForm {
  private readonly schema = new FormSchema([
    new FormField("email", "E-mail", "email", "nome@exemplo.com"),
    new FormField(
      "termos",
      "Concordo em receber comunicacoes e li a politica de privacidade.",
      "checkbox"
    )
  ]);

  public fields() {
    return this.schema.list();
  }
}

export class NewsletterPage extends React.PureComponent {
  private readonly form = new NewsletterForm();

  public override render(): React.ReactNode {
    return (
      <div className="page page-newsletter">
        <FormRenderer
          actionsAlignment="start"
          description="Receba os melhores conteudos diretamente no seu e-mail."
          fields={this.form.fields()}
          layout="stack"
          submitFullWidth
          submitLabel="Assinar"
          title="Assine a newsletter"
        />
      </div>
    );
  }
}
