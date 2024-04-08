"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const data = [
  {
    name: "compassSOL",
    price: "183.35",
    volume: "2.14M",
    views: "3.16K",
    tvl: "945.18k",
    img: "/icons/compassSOL.png",
  },
  {
    name: "SOFTCO",
    price: "0.001523",
    volume: "5.43k",
    views: "170.85k",
    tvl: "1.51M",
    img: "/icons/SOFTCO.jpg",
  },
  {
    name: "SPDR",
    price: "0.035138",
    volume: "535.82K",
    views: "8.59K",
    tvl: "2.77M",
    img: "/icons/SPDR.png",
  },
  {
    name: "SHDW",
    price: "1.919",
    volume: "2.02M",
    views: "4.26K",
    tvl: "7.08M",
    img: "/icons/SHDW.png",
  },
  {
    name: "SOLC",
    price: "0.1581",
    volume: "889.22K",
    views: "4.66K",
    tvl: "1.01M",
    img: "/icons/SOLC.png",
  },
  {
    name: "WEN",
    price: "0.00037307",
    volume: "12.92M",
    views: "24.82K",
    tvl: "11.22M",
    img: "/icons/wen.png",
  },
  {
    name: "boden",
    price: "0.9417",
    volume: "24.62M",
    views: "27.23K",
    tvl: "8.77M",
    img: "/icons/boden.png",
  },
  {
    name: "CHONKY",
    price: "0.0₄5509",
    volume: "751.32K",
    views: "5.19K",
    tvl: "2.05M",
    img: "/icons/CHONKY.jpg",
  },
  {
    name: "INFINITY",
    price: "0.0₄5395",
    volume: "737.26",
    views: "4.67K",
    tvl: "2.05M",
    img: "/icons/INFINITY.png",
  },
  {
    name: "PUPS",
    price: "24.49",
    volume: "7.42M",
    views: "7.41K",
    tvl: "905.32k",
    img: "/icons/PUPS.png",
  },
];

export function PopularTokens() {
  return (
    <Table aria-label="Popular tokens" className="pt-2">
      <TableHeader>
        <TableColumn key="token">Token</TableColumn>
        <TableColumn key="price">24h Price</TableColumn>
        <TableColumn key="volums">24h Volums</TableColumn>
        <TableColumn key="views">24h Views</TableColumn>
        <TableColumn key="tvl">TVL</TableColumn>
      </TableHeader>
      <TableBody>
     
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.tvl}</TableCell>
              <TableCell>{item.views}</TableCell>
              <TableCell>{item.volume}</TableCell>
            </TableRow>
          ))}
     
      </TableBody>
    </Table>
  );
}
