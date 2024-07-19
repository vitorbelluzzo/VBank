import Home from "@/app/home/page";
import { Toaster } from "sonner";
import {createLocalStorage, getAllLocalStorages }   from "@/services/storage";

export default function App() {

  createLocalStorage()
  console.log(getAllLocalStorages());
  
  return (
    <div>
      <Toaster richColors position="top-center" />
      <Home />
    </div>
  );
}


 