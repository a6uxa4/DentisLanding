import { FC, FunctionComponent, PropsWithChildren } from "react";
import { Header } from "../screens/header";
import { Inter } from "next/font/google";
import { Footer } from "@/screens/footer";
import { BannerPage } from "@/screens/banner";

interface IProps extends PropsWithChildren {}

const inter = Inter({ subsets: ["latin"] });

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <BannerPage />
      <main
        className={`w-full h-full min-h-[calc(100vh_-_100px)] m-auto grid place-content-center max-w-[1440px] px-[10px] pb-[100px] ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
