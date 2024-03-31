import { Nav } from "./_components/nav";
import { TokensList } from "./_components/tokens-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { PopularTokens } from "./_components/popular-tokens";

export default function OverViewPage() {
  const list = [
    { name: "Popular tokens" },
  ];
  
  return (
    <>
      <div className="stable-scrollbar-gutter w-full space-y-6 overflow-y-auto">
        <Nav />
      </div>
      <div className="h-auto w-full space-y-10">
        <TokensList />
        <div className="mb-8 flex items-center gap-4">
          <h2 className="flex-shrink-0 text-lg font-medium text-accent dark:text-zinc-700">
            Quick view
          </h2>
          <div className="h-[1px] w-full bg-zinc-100 dark:bg-zinc-900" />
        </div>
        <div className="flex flex-col gap-8">
          {list.map((item, index) => (
            <div
              key={index}
              className="group/link relative flex flex-col items-start gap-2 md:flex-row lg:gap-4"
            >
              <div className="w-full">
                <div className="sticky top-32 pl-1 z-40 flex items-center justify-between gap-4 py-2 md:gap-8">
                  <div className="bg-light-zinc/95 absolute left-1/2 h-full w-full -translate-x-1/2 bg-background backdrop-blur-xl" />
                  <div className="relative flex items-center gap-2 md:gap-3">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                  </div>
                </div>
                <PopularTokens />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
