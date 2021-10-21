import React from "react";
import UserRouter from "./router/UserRouter";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
