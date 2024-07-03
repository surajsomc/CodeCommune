"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import About from "../about/about.txs"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {session && "signed in"}
        <div className="about text-center max-w-5xl">
          <h1 className="text-6xl tracking-tighter"> Our Mission </h1>
          <p className="text-xl py-4">
            A community which always reserves a place for those who want to
            learn
          </p>
          <p className="text-base pb-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero
            eos amet nulla aspernatur! Distinctio dolor voluptate nostrum natus
            vel? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus impedit animi dolorum explicabo laudantium ducimus eum
            praesentium culpa delectus. Architecto.
          </p>
          <Button variant="default" size="default" asChild>
            <a
              href="https://discord.gg/FchtwAcN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reach Us
            </a>
          </Button>
        </div>
      </main>
    </div>
  )
}
