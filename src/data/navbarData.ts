export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
