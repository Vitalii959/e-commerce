import {Outlet} from "react-router";
import {Navigation} from "../../widgets/ui/navigation";

export const Layout = () => {
  return (
    <>
      <Navigation />
      {/* <h2>Cart</h2> */}
      <Outlet />
    </>
  );
};
