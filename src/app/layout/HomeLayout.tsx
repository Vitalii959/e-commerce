import {Outlet} from "react-router";
import {Navigation} from "../../widgets/ui/navigation";

export const HomeLayout = () => {
  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};
