import {Route, Routes} from "react-router";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {HomeLayout, FormsLayout, CheckoutLayout} from "@/app/layout/";
import {Home, Shipping, Customer, Payment} from "@/pages/";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='checkout' element={<CheckoutLayout />}>
          <Route path='forms' element={<FormsLayout />}>
            <Route path='shipping' element={<Shipping />} />
            <Route path='customer' element={<Customer />} />
            <Route path='*' element={<h1>not exist</h1>} />
          </Route>
          <Route path='payment' element={<Payment />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
};
