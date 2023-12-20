import { FC, FunctionComponent, PropsWithChildren } from "react";
import { Header } from "../screens/header";
import { Inter } from "next/font/google";

interface IProps extends PropsWithChildren {}

const inter = Inter({ subsets: ["latin"] });

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className={`w-full h-full m-auto grid place-content-center max-w-[1440px] px-[10px] ${inter.className}`}
      >
        {children}
      </main>
      {/* <Footer /> */}
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
