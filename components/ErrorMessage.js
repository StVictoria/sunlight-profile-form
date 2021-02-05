import FormHelperText from "@material-ui/core/FormHelperText";

import { isFieldError } from "../utils/validate";
import { ValidateMessage } from "../utils/validate";

export default function ErrorMessage({ meta, noErrorMessage }) {
  if (noErrorMessage) {
    return null;
  }
  return (
    isFieldError(meta) &&
    meta.error !== ValidateMessage.REQUIRED && (
      <div className="ErrorMessage">
        <FormHelperText error>{meta.error}</FormHelperText>
      </div>
    )
  );
}
