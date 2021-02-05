import { useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";

import UserFormStyles from "../styles/UserForm.module.scss";
import { validateForm, isFieldError } from "../utils/validate";
import ErrorMessage from "./ErrorMessage";
import CustomButton from "./common/CustomButton";

const fields = [
  {
    id: 0,
    name: "userName",
    label: "Фамилия и имя",
    placeholder: "Укажите Вашу вамилию и имя",
    type: "text",
    iconPath: "/badge.png",
  },
  {
    id: 1,
    name: "email",
    label: "E-mail",
    placeholder: "ivanova@mail.ru",
    type: "email",
    iconPath: "/mail.png",
  },
  {
    id: 2,
    name: "phoneNumber",
    label: "Номер телефона",
    type: "tel",
    placeholder: "Укажите номер телефона",
    iconPath: "/phone.png",
  },
];

export default function UserForm({ isFormOpen, handleDialogOpen }) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function handleFormSubmit(values) {
    try {
      const response = await axios.post(
        "http://localhost:3005/api",
        JSON.stringify(values)
      );
      setLoading(true);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
    handleDialogOpen();
  }

  const renderUserForm = (fields) =>
    fields.map((field) => (
      <React.Fragment key={field.id}>
        <Field
          name={field.name}
          className={UserFormStyles.TextField}
          render={({ input, meta, ...rest }) => (
            <div className={UserFormStyles.FieldItem}>
              <label htmlFor={field.id}>
                <img
                  src={field.iconPath}
                  className={UserFormStyles.FieldIcon}
                  alt={field.label}
                />
              </label>
              <TextField
                id={field.name}
                {...input}
                {...rest}
                placeholder={field.placeholder}
                type={field.type}
                error={isFieldError(meta)}
                label={field.label}
                className={UserFormStyles.TextField}
                variant="outlined"
              />
              <ErrorMessage meta={meta} />
            </div>
          )}
        />
        {fields.length - 1 !== field.id ? (
          <div className={UserFormStyles.Divider} />
        ) : null}
      </React.Fragment>
    ));

  return (
    <Paper
      className={UserFormStyles.UserFormMuiPaper}
      style={isFormOpen ? { display: "block" } : { display: "none" }}
    >
      <Form
        onSubmit={handleFormSubmit}
        validate={validateForm}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} className={UserFormStyles.UserForm}>
            <section className={UserFormStyles.MainFormContent}>
              {renderUserForm(fields)}
            </section>

            <CustomButton
              isLoading={isLoading}
              name="Сохранить изменения"
              type="submit"
            />
          </form>
        )}
      />
    </Paper>
  );
}
