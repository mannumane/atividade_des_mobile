import React from "react";
import { FormFieldView } from "@app-types/content";

interface FormRendererProps {
  readonly title: string;
  readonly description?: React.ReactNode;
  readonly fields: FormFieldView[];
  readonly submitLabel?: string;
  readonly children?: React.ReactNode;
  readonly layout?: "grid" | "stack";
  readonly actionsAlignment?: "start" | "center" | "end";
  readonly submitFullWidth?: boolean;
  readonly hideSubmitButton?: boolean;
}

export class FormRenderer extends React.PureComponent<FormRendererProps> {
  private renderField(field: FormFieldView): React.ReactNode {
    const commonProps = {
      id: field.id,
      name: field.id,
      placeholder: field.placeholder
    };

    if (field.type === "textarea") {
      return <textarea {...commonProps} rows={4} />;
    }

    if (field.type === "select") {
      return (
        <select {...commonProps}>
          <option value="">Selecione</option>
        </select>
      );
    }

    if (field.type === "checkbox") {
      return (
        <>
          <input {...commonProps} type="checkbox" />
          <label htmlFor={field.id}>{field.label}</label>
        </>
      );
    }

    return <input {...commonProps} type={field.type} />;
  }

  public override render(): React.ReactNode {
    const {
      title,
      description,
      fields,
      submitLabel = "Enviar",
      children,
      layout = "grid",
      actionsAlignment = "end",
      submitFullWidth = false,
      hideSubmitButton = false
    } = this.props;

    const wrapperClass =
      layout === "grid" ? "form-grid" : "stack-md";
    const actionsClass = `form-actions form-actions--${actionsAlignment}`;
    const submitStyle = submitFullWidth ? { width: "100%" } : undefined;

    return (
      <form className="form-container">
        <div>
          <h1>{title}</h1>
          {description ? <p className="muted">{description}</p> : null}
        </div>
        <div className={wrapperClass}>
          {fields.map((field) => {
            const isCheckbox = field.type === "checkbox";
            const groupClass = isCheckbox ? "checkbox-group" : "form-group";

            return (
              <div className={groupClass} key={field.id}>
                {isCheckbox ? null : (
                  <label htmlFor={field.id}>{field.label}</label>
                )}
                {this.renderField(field)}
              </div>
            );
          })}
        </div>
        {children}
        {hideSubmitButton ? null : (
          <div className={actionsClass}>
            <button
              className="btn btn--primary"
              style={submitStyle}
              type="submit"
            >
              {submitLabel}
            </button>
          </div>
        )}
      </form>
    );
  }
}
