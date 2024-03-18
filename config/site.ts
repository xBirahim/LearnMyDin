export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LearnMyDin",
  description: "Gotta learn dude!",
  navItems: [
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Hadiths",
      href: "/hadith",
    },
    {
      label: "Quran",
      href: "/quran",
    },
  ],
  navMenuItems: [
    {
      label: "Books",
      href: "/books",
    },
    {
      label: "Quran",
      href: "/Quran",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  language: [
    { key: 1, name: "Arabic", min: "Ar" },
    { key: 2, name: "Bengali", min: "Be" },
    { key: 3, name: "English", min: "En" },
    { key: 4, name: "French", min: "Fr" },
    { key: 5, name: "Indonesian", min: "In" },
    { key: 6, name: "Russian", min: "Ru" },
    { key: 7, name: "Tamil", min: "Ta" },
    { key: 8, name: "Turkish", min: "Tu" },
    { key: 9, name: "Urdu", min: "Ur" },
  ],
  links: {
    github: "https://github.com/xBirahim/LearnMyDin.git",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
