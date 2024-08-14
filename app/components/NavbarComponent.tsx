'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function App() {
  const pathname = usePathname()
  // console.log(pathname)
  
  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">AG</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/' ? true : false }>
          <Link color="foreground" href="/">
            Hello!
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/tracks' ? true : false }>
          <Link href="/tracks" aria-current="page">
            Top Tracks
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/events' ? true : false }>
          <Link color="foreground" href="/events">
            Events
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}
