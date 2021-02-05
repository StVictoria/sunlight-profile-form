export const ValidateMessage = {
  REQUIRED: "required",
  NAME: "Неверное имя",
  EMAIL: "Неверный адрес",
  PHONE: "Неверный номер телефона",
};

export const isFieldError = (meta) => Boolean(meta.error && meta.submitFailed);

export const validateForm = (values) => {
  const errors = {};
  if (!values.userName && !values.phoneNumber && !values.email) {
    errors.userName = ValidateMessage.REQUIRED;
    errors.phoneNumber = ValidateMessage.REQUIRED;
    errors.email = ValidateMessage.REQUIRED;
  }
  if (values.userName && values.userName == "имя") {
    errors.userName = ValidateMessage.NAME;
  }
  return errors;
};
