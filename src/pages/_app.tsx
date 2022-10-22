import "../styles/globals.css";
import type { AppProps } from "next/app";

import AppLayout from "layouts/AppLayout";
import Seo from "components/Seo";

// redux store
import { Provider } from "react-redux";
import { store } from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Seo />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
