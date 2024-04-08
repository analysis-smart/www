import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface TokensItemProps {
  name: string;
  price: string;
  url: string;
  link: string;
}

export function TokensItem(props: TokensItemProps) {
  return (
    <Link href={props.link} target="_bank">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium uppercase">
            {props.name}
          </CardTitle>
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full text-xs">
            <Image
              fill
              className="rounded-full"
              src={props.url}
              alt="token_logo"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {props.price.toLocaleString()}
          </div>
          <p className="text-xs text-foreground">+201 holder last hour</p>
        </CardContent>
      </Card>
    </Link>
  );
}
