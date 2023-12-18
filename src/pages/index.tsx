import { ServicesPage } from "@/screens/services";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full flex flex-col items-center px-4 ${inter.className}`}
    >
      <ServicesPage />
    </main>
  );
}
