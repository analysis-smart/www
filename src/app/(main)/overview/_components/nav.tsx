import Link from "next/link";
import { Twitter } from "lucide-react";
import { Icons } from "~/components/icons";

export function Nav() {
  return (
    <div className="hidden space-y-4 px-0.5 py-1 md:block">
      <Link
        href="/overview"
        target="_blank"
        className="group mb-5 flex items-center font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 sm:mb-4 lg:text-sm lg:leading-6"
      >
        <div className="zinc-box mr-4 rounded-lg p-1 ring-1 ring-gray-950/5 group-hover:ring-0 group-hover:brightness-100 dark:ring-gray-700/40">
          <Twitter className="h-4 w-4" />
        </div>
        <span>Twitter</span>
      </Link>
      <Link
        href="/overview"
        target="_blank"
        className="group mb-5 flex items-center font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 sm:mb-4 lg:text-sm lg:leading-6"
      >
        <div className="zinc-box mr-4 rounded-lg p-1 ring-1 ring-gray-950/5 group-hover:ring-0 group-hover:brightness-100 dark:ring-gray-700/40">
          <Icons.telegram className="h-4 w-4 group-hover:brightness-100" />
        </div>
        <span>Community</span>
      </Link>
      <Link
        href="/overview"
        target="_blank"
        className="group mb-5 flex items-center font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 sm:mb-4 lg:text-sm lg:leading-6"
      >
        <div className="zinc-box mr-4 rounded-lg p-1 ring-1 ring-gray-950/5 group-hover:ring-0 group-hover:brightness-100 dark:ring-gray-700/40">
          <Icons.route_line className="h-4 w-4 group-hover:brightness-100" />
        </div>
        <span>route line</span>
      </Link>
    </div>
  );
}
