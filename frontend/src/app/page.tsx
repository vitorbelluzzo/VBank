import Home from "@/app/home/page";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div>
      <Toaster richColors position="top-center" />
      <Home />
    </div>
  );
}
