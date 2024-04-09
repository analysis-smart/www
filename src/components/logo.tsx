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
    <Link href="/" className="flex md:items-center gap-2">
      <Image
        src="/logo.jpg"
        height={40}
        width={40}
        alt="Logo"
        className="dark:hidden rounded-full"
      />
      <Image
        src="/logo.jpg"
        height={40}
        width={40}
        alt="Logo"
        className="hidden dark:block rounded-full"
      />
      <p className={cn("text-lg font-bold tracking-wide md:block hidden", font.className)}>
        TokenSpy
      </p>
    </Link>
  );
};
