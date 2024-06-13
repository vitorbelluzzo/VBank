import { CardLogin } from "@/components/Card/card";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardLogin />} />
      </Routes>
      <Route path="/account" element={
        <h1>
          Conta
        </h1>
      }></Route>
    </BrowserRouter>
  );
}
