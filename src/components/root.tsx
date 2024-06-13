import { ReactNode } from "react";
import HeaderSection from "./header";
import FooterSection from "./footer";

interface appProps {
  children?: ReactNode;
}

function RootPage({ children }: appProps) {
  return (
    <div>
      <HeaderSection />
      {children}
      <FooterSection />
    </div>
  );
}

export default RootPage;
