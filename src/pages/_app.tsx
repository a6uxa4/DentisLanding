import { NextUIProvider } from "@/providers/NextUI";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "swiper/css";
import "react-vertical-timeline-component/style.min.css";
import ActiveSectionContextProvider from "@/providers/ActiveSection";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ActiveSectionContextProvider>
          <Component {...pageProps} />
        </ActiveSectionContextProvider>
      </NextUIProvider>
    </Provider>
  );
}
