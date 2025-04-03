export interface LogoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const logoData: LogoData[] = [
  {
    src: "/tailwind.svg",
    alt: "tailwind logo",
    width: 50,
    height: 50,
  },
  {
    src: "/next.svg",
    alt: "nextjs logo",
    width: 150,
    height: 150,
  },
  {
    src: "/shadcn.svg",
    alt: "shadcn logo",
    width: 40,
    height: 40,
  },
  {
    src: "/deno.svg",
    alt: "deno logo",
    width: 40,
    height: 40,
  },
];
