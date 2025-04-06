export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  emoji?: string;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    emoji: "🏠",
    disabled: true,
  },
  {
    title: "Blog",
    href: "/blog",
    emoji: "✍️",
  },
  {
    title: "Projects",
    href: "/projects",
    emoji: "🚀",
  },
  {
    title: "About",
    href: "/about",
    emoji: "🤔",
  },
  {
    title: "Contact",
    href: "/contact",
    emoji: "📩",
  },
];
