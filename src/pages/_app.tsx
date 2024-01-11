import { NextUIProvider } from "@/providers/NextUI";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "swiper/css";
import "react-vertical-timeline-component/style.min.css";
import ActiveSectionContextProvider from "@/providers/ActiveSection";
import Natification from "@/components/UI/Notification";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ActiveSectionContextProvider>
          <Natification>
            <Head>
              <title>Estetic clinic</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            <Component {...pageProps} />
          </Natification>
        </ActiveSectionContextProvider>
      </NextUIProvider>
    </Provider>
  );
}
