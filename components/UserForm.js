import Paper from "@material-ui/core/Paper";
import { Form, Field } from "react-final-form";
import TextField from "@material-ui/core/TextField";

import UserFormStyles from "../styles/UserForm.module.scss";

const styles = {
  MuiPaper: {
    background: "#FFFFFF",
    padding: 45,
    boxSizing: "border-box",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
  },
  TextField: {
    height: 57,
    width: 254,
    left: 0,
  },
};

const fields = [
  { id: 0, name: "userName", label: "Фамилия и имя", iconPath: "/badge.png" },
  { id: 1, name: "email", label: "E-mail", iconPath: "/mail.png" },
  {
    id: 2,
    name: "phoneNumber",
    label: "Номер телефона",
    iconPath: "/phone.png",
  },
];

export default function UserForm() {
  const handleFormSubmit = () => console.log("handleFormSubmit");

  const renderUserForm = (fields) =>
    fields.map((field) => (
      <>
        <Field
          name={field.name}
          style={styles.TextField}
          render={() => (
            <div className={UserFormStyles.FieldItem}>
              <label for={field.id}>
                <img
                  src={field.iconPath}
                  className={UserFormStyles.FieldIcon}
                  alt={field.label}
                />
              </label>
              <TextField
                id={field.id}
                label={field.label}
                style={styles.TextField}
                variant="outlined"
              />
            </div>
          )}
        />
        {fields.length - 1 !== field.id ? (
          <div className={UserFormStyles.Divider} />
        ) : null}
      </>
    ));

  return (
    <Paper style={styles.MuiPaper}>
      <Form
        onSubmit={handleFormSubmit}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={UserFormStyles.UserForm}>
            <section className={UserFormStyles.MainFormContent}>
              {renderUserForm(fields)}
            </section>

            <button type="submit" className={UserFormStyles.SubmitButton}>
              Сохранить изменения
            </button>
          </form>
        )}
      />
    </Paper>
  );
}
