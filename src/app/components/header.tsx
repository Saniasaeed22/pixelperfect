import Link from "next/link";
import React from 'react';
import { Menu } from "lucide-react"

import { AiOutlineCrown } from "react-icons/ai";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


function Header() {
  return (
    <header className="max-w-screen-2xl mx-auto">

<div className="text-3xl font-bold flex justify-start">
    < AiOutlineCrown  />
     <Link  className="font-serif" href="/"> Fashion</Link>
      </div>

      {/* Links */}
      <nav> 
        <div className="">
        <ul className="hidden md:flex md:justify-between md:gap-7 p-7 font-bold pl-11 pr-11">
        <li className="">
            <Link className="flex hover:bg-yellow-200"href="/">HOME</Link>
          </li>
          <li>
            <Link className="flex hover:bg-yellow-200" href="#fashion">FASHION</Link>
          </li>
          <li>
            <Link className="flex hover:bg-yellow-200"href="#Favourite">FAVAOURITE</Link>
          </li>
          <li>
            <Link className="flex hover:bg-yellow-200"href="/catalogue">CATALOGUE</Link>
          </li>
          <li>
            <Link className="bg-black text-white flex hover:text-yellow-500 hover:bg-white"
            href="/signup">SING UP</Link>
          </li>
        </ul>
        </div>

      
        <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent className="bg-white">
        <ul>
        <li className="space-x-2 py-9 flex flex-col font-medium">
          <Link className="hover:text-pink-600"href="/">Home </Link>
          <Link className="hover:text-pink-600"href="#about">About</Link>
          <Link className="hover:text-pink-600"href="#services">Services</Link>
          <Link className="hover:text-pink-600"href="#project">Projects</Link>
          <Link className="hover:text-pink-600"href="#contact">Contact</Link>
        </li>
      </ul>
        </SheetContent>
      </Sheet>




      </nav>
    </header>
  );
}

export default Header