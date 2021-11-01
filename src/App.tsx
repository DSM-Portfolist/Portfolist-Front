import React from "react";
import UserRouter from "./router/UserRouter";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
