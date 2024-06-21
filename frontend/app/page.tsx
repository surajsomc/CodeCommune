
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {session && "signed in"}
      </main>
    </div>
  );
}
