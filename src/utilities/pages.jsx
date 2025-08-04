import { Dashboard } from "../components/Dashboard";
import { DetailSpecie } from "../components/DetailSpecie";

export const pages = [
  {
    name: "Dashboard",
    route: "/",
    component: <Dashboard />,
  },
  {
    name: "Detail",
    route: "/:species/:id",
    component: <DetailSpecie />,
  },
];
