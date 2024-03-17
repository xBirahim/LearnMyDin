export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LearnMyDin",
  description: "Gotta learn dude!",
  navItems: [
    {
      label: "Hadith",
      href: "/hadith",
    },
    {
      label: "Quran",
      href: "/quran",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/xBirahim/LearnMyDin.git",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
