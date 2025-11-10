import {Route, Routes} from "react-router";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {Layout} from "./layout";
import {Home} from "../pages/home/ui";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
