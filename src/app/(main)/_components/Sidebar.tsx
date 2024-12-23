"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  ArrowDown2,
  Clock,
  HambergerMenu,
  Home,
  Magicpen,
} from "iconsax-react";
import Link from "next/link";
import { useRef } from "react";

// Menu items.
const items = [
  {
    title: "Recent",
    url: "#",
    icon: <Clock size="20" color="#121212" />,
  },
  {
    title: "Pinned",
    url: "#",
    icon: <Magicpen size="20" color="#121212" />,
  },
];

export function AppSidebar() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div>
          {/* <button ref={buttonRef} className="hidden"> */}
          <SidebarTrigger ref={buttonRef} className="hidden" />
          {/* </button> */}
          <HambergerMenu
            onClick={() => {
              buttonRef.current?.click();
            }}
            size="32"
            color="#121212"
          />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className="flex items-center justify-between"
                      href={item.url}
                    >
                      <div className="flex-1 flex items-center gap-3">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <ArrowDown2 size="32" color="#FF8A65" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent>
            <SidebarGroupLabel>
              <span>My Work</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {/* Add more menu items here */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Sales accelerator</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>dashboard</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Activities</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarGroupLabel>
              <span>Customers</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {/* Add more menu items here */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Accounts</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Contacts</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarGroupLabel>
              <span>Sales</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {/* Add more menu items here */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Leads</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Opportunites</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Competitors</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarGroupLabel>
              <span>Collateral</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {/* Add more menu items here */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Quotes</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Orders</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Invoices</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Products</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Sales Literature</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarGroupLabel>
              <span>Marketing</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {/* Add more menu items here */}
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Marketing Lists</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link className="flex items-center gap-3" href={"/"}>
                    <Home size={20} color="#121212 " />
                    <span>Quick Campaigns</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>


        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarContent>
            <SidebarMenuButton>
              <Link className="bg-blue-700 text-white w-full p-3 text-[18px] text-center font-bold" href={'/agent-skill'}>
              Agent Skill</Link>
            </SidebarMenuButton>
          </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
