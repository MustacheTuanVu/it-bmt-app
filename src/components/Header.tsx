"use client"

import * as React from "react"
import { Check, ChevronsUpDown, GalleryVerticalEnd, Search } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Header({child}: any) {

  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                      <GalleryVerticalEnd className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">IT BMT LIST</span>
                      <span className="">v{'0.0.1-alpha'}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width]"
                  align="start"
                >
                  <DropdownMenuItem>
                    v{'0.0.1-alpha'}{" "}
                    <Check className="ml-auto" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <form>
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <SidebarInput
                  id="search"
                  placeholder="Search the docs..."
                  className="pl-8"
                />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
        </SidebarHeader>
        <SidebarContent>
          {/* We create a SidebarGroup for each parent. */}
            <SidebarGroup>
              <SidebarGroupLabel>Công ty IT</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={true}>
                      <a href={'/'}>{'Trang Chủ'}</a>
                    </SidebarMenuButton>
                    <SidebarMenuButton asChild isActive={true}>
                      <a href={'/add-company'}>{'Thêm Công Ty'}</a>
                    </SidebarMenuButton>
                    {status === 'loading' ? null : session ?
                      <SidebarMenuButton asChild isActive={true}>
                        <a href={'#'} onClick={handleLogout}>{'Đăng xuất'}</a>
                      </SidebarMenuButton>
                      :
                      <>
                        <SidebarMenuButton asChild isActive={true}>
                          <a href={'/login'} onClick={handleLogout}>{'Đăng Nhập'}</a>
                        </SidebarMenuButton>
                        <SidebarMenuButton asChild isActive={true}>
                          <a href={"/register"} onClick={handleLogout}>{'Đăng Ký'}</a>
                        </SidebarMenuButton>
                      </>
                    }
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </header>
        {child}
      </SidebarInset>
    </SidebarProvider>
  )
}
