import { NextUIProvider } from "@/providers/NextUI";
import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "swiper/css";
import "react-vertical-timeline-component/style.min.css";
import ActiveSectionContextProvider from "@/providers/ActiveSection";
import Natification from "@/components/UI/Notification";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <ActiveSectionContextProvider>
          <Natification>
            <Component {...pageProps} />
          </Natification>
        </ActiveSectionContextProvider>
      </NextUIProvider>
    </Provider>
  );
}
