"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Settings, User, Grid, Calendar } from "react-feather";

const icons = {
  settings: Settings,
  user: User,
  grid: Grid,
  calendar: Calendar,
};

type Link = {
  label: string;
  link: string;
  icon: string;
};

export const SidebarLink = ({ link }: { link: Link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon = icons[link.icon as keyof typeof icons];

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};
