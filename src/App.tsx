import UserRouter from "./router/UserRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { pdfjs } from "react-pdf";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const queryClient = new QueryClient();

  console.log(process.env.REACT_APP_API_URL);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <UserRouter />
      </QueryClientProvider>
    </>
  );
}

export default App;
