"use client";

import * as React from "react";
import {
  AudioWaveform,
  BadgeDollarSign,
  BookOpen,
  Bot,
  Briefcase,
  Command,
  FolderCheck,
  FolderGit2,
  Frame,
  GalleryVerticalEnd,
  Hourglass,
  House,
  Mail,
  Paperclip,
} from "lucide-react";

// import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Sam Hendricksen",
    email: "samuel.h1996@yahoo.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Sam H",
      logo: GalleryVerticalEnd,
      plan: "Software",
    },
  ],
  // navMain: [
  //   {
  //     title: "Playground",
  //     url: "/Projects",
  //     icon: SquareTerminal,
  //     isActive: false,
  //     items: [
  //       {
  //         title: "History",
  //         url: "#",
  //       },
  //       {
  //         title: "Starred",
  //         url: "#",
  //       },
  //       {
  //         title: "Settings",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Models",
  //     url: "#",
  //     icon: Bot,
  //     items: [
  //       {
  //         title: "Genesis",
  //         url: "#",
  //       },
  //       {
  //         title: "Explorer",
  //         url: "#",
  //       },
  //       {
  //         title: "Quantum",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Introduction",
  //         url: "#",
  //       },
  //       {
  //         title: "Get Started",
  //         url: "#",
  //       },
  //       {
  //         title: "Tutorials",
  //         url: "#",
  //       },
  //       {
  //         title: "Changelog",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "General",
  //         url: "#",
  //       },
  //       {
  //         title: "Team",
  //         url: "#",
  //       },
  //       {
  //         title: "Billing",
  //         url: "#",
  //       },
  //       {
  //         title: "Limits",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
  projects: [
    {
      name: "About",
      url: "/about",
      icon: House,
    },
    {
      name: "Work",
      url: "/work",
      icon: Briefcase,
    },
    {
      name: "Projects",
      url: "/projects",
      icon: FolderGit2,
    },
    {
      name: "Resume",
      url: "/resume",
      icon: Paperclip,
    },
    {
      name: "Freelance",
      url: "/freelance",
      icon: BadgeDollarSign,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: Mail,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
