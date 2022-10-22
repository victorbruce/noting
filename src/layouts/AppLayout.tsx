import { ReactNode } from "react";
import Navbar from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
