import { StylesProvider } from "@material-ui/core/styles";

import "../styles/_base.scss";

export default function App({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  );
}
