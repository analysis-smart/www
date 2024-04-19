import { Nav } from "../../overview/_components/nav";
import { ExampleNav } from "./_components/example-nav";

interface DashBoardProps {
  children: React.ReactNode;
}

export default function DashBoard({ children }: DashBoardProps) {
  return (
    <>
      <Nav />
      <div className="flex h-full flex-1 flex-col items-center gap-12">
        {children}
        <ExampleNav />
      </div>
    </>
  );
}
