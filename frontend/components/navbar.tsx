'use client';
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

const Navbar: React.FC = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg py-3 border-b-2">
      <div className="flex justify-between items-center">
        <div className="flex px-3 items-center space-x-3">
          <h1 className="text-2xl font-bold">CodeCommune</h1>
        </div>

        <div className="flex space-x-3 ml-auto font-sans font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Button onClick={!session?()=>signIn():()=>signOut()} className="mx-3">{!session?"Sign Up/Sign In":"Logout"}</Button>
      </div>
    </nav>
  );
};

export default Navbar;
