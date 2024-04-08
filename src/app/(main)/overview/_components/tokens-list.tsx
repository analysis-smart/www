import { Marquee } from "./marquee";
import { TokensItem } from "./tokens-item";

const data = [
  {
    name: "JUP",
    price: "1.44",
    url: "/icons/jup.webp",
    link: "https://jup.ag/swap/JUP-USDC",
  },
  {
    name: "zeus",
    price: "0.95977",
    url: "/icons/zeus.webp",
    link: "https://jup.ag/swap/ZEUS-USDC",
  },
  {
    name: "duko",
    price: "0.00181694",
    url: "/icons/duko.jpg",
    link: "https://jup.ag/swap/DUKO-USDC",
  },
  {
    name: "icc",
    price: "0.000667466282",
    url: "/icons/icc.jpg",
    link: "https://jup.ag/swap/ICC-USDC",
  },
  {
    name: "luis",
    price: "0.013618",
    url: "/icons/luis.jpg",
    link: "https://jup.ag/swap/LUIS-USDC",
  },
  {
    name: "ponk",
    price: "0.066876993",
    url: "/icons/ponk.jpeg",
    link: "https://jup.ag/swap/PONKE-USDC",
  },
  {
    name: "pyth",
    price: "0.849567",
    url: "/icons/pyth.svg",
    link: "https://jup.ag/swap/PYTH-USDC",
  },
  {
    name: "w",
    price: "1.0021",
    url: "/icons/w.png",
    link: "https://jup.ag/swap/W-USDC",
  },
  {
    name: "wcc",
    price: "0.00409961",
    url: "/icons/wcc.jpg",
    link: "https://jup.ag/swap/WCC-USDC",
  },
  {
    name: "wen",
    price: "0.000372357",
    url: "/icons/wen.png",
    link: "https://jup.ag/swap/WEN-USDC",
  },
  {
    name: "wif",
    price: "4.206605",
    url: "/icons/wif.jpg",
    link: "https://jup.ag/swap/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm-USDC",
  },
];

export async function TokensList() {
  return (
    <Marquee className="mt-2" reverse fade pauseOnHover>
      {data.map((item, index) => (
        <TokensItem key={index} {...item} />
      ))}
    </Marquee>
  );
}
