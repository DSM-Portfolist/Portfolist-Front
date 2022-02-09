import UserRouter from "./router/UserRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
