import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "./MainLayout.styled";
import { Loader } from "components/Loader/Loader";
import { Header } from "components/Header/Header";

export const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
