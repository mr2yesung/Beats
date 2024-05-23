import { Outlet } from "react-router-dom";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

function PageLayout() {
  return (
    <>
      <div className="fixed w-full bg-background">
        <Header />
      </div>

      <main className="pt-[68px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default PageLayout;
