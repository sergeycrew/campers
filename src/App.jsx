import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { Catalog } from "./pages/Catalog";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/campers" element={<MainLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
