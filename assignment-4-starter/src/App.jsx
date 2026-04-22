import { Routes, Route } from "react-router-dom";
import { AnimeProvider } from "./context/AnimeContext";

import Navbar from "./layout/Navbar";
import Home from "./views/Home";
import List from "./views/List";
import Detail from "./views/Detail";
import Form from "./views/Form";
import NotFound from "./views/NotFound";

export default function App() {
  return (
    <AnimeProvider>
      <div className="container py-3">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/item/:id" element={<Detail />} />
          <Route path="/new" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </AnimeProvider>
  );
}