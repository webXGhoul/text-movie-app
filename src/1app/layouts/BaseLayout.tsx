import { Header } from "@/3widgets/header/ui";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

export default BaseLayout;
