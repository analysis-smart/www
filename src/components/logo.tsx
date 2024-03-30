import { Poppins } from "next/font/google";
import { cn } from "~/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <Link href="/" className="hidden md:flex md:items-center">
      <Image
        src="/assets/logo.svg"
        height={40}
        width={40}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/assets/logo-dark.svg"
        height={40}
        width={40}
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("text-lg font-bold tracking-wide", font.className)}>
        SolTeller
      </p>
    </Link>
  );
};
