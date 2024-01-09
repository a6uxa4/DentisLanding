import { NextPage } from "next";
import { useRouter } from "next/router";

const SubServicePage: NextPage = () => {
  const routes = useRouter();

  console.log(routes.query.serviceID);
  return <div>SubService:NextPage</div>;
};

export default SubServicePage;
