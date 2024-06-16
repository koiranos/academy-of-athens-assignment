import HeaderSection from "../header";
import FooterSection from "../footer";
import { Outlet } from "react-router-dom";

function RootPage() {
  return (
    <div>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default RootPage;
