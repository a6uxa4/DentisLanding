import { withLayout } from "@/Layout";
import { ServicesPage } from "@/screens/services";

function Home() {
  return (
    <>
      <ServicesPage />
    </>
  );
}

export default withLayout(Home);
