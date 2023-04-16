import { Card } from "../Card/Card";
import { SidebarLink } from "./SidebarLink";

const links = [
  { label: "Home", icon: "grid", link: "/home" },
  {
    label: "Calendar",
    icon: "calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "user", link: "/profile" },
  {
    label: "Settings",
    icon: "settings",
    link: "/settings",
  },
];

export const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (
        <SidebarLink link={link} key={link.label} />
      ))}
    </Card>
  );
};
