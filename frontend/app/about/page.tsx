"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {DiscordIcon} from "@/assets/icons";

const contributors = [
  {
    name: "Suraj Somarajan",
    imageSrc: "SProfile.jpg",
    fallback: "CN",
    link: "https://www.linkedin.com/in/suraj-somarajan-b496b1222/"
  },
  {
    name: "Placeholder Name",
    imageSrc: "",
    fallback: "PH",
  },
  {
    name: "Placeholder 2",
    imageSrc: "",
    fallback: "PH",
  },
  // Add more contributors as needed
]

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="about text-center max-w-5xl">
          <h1 className="text-6xl tracking-tighter">Our Mission</h1>
          <p className="text-xl py-4">
            A community for coders to gain that &quot;entry level&quot; experience. We
            provide a platform for coders to collaborate on projects, learn new
            technologies, and build a portfolio. Our goal is to help you find
            new people and opportunities to grow your skills.
          </p>
          <p className="text-base pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero
            eos amet nulla aspernatur! Distinctio dolor voluptate nostrum natus
            vel? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus impedit animi dolorum explicabo laudantium ducimus eum
            praesentium culpa delectus. Architecto.
          </p>
          <Button variant="default" size="default" asChild className="space-x-6">
            <a
              href="https://discord.gg/FchtwAcN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon className="h-full w-max" />
              Join Our Discord to Contribute
            </a>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl tracking-tighter py-10">Contributors</h1>
          <div className="flex flex-row space-x-32">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Avatar className="flex justify-center items-center scale-150">
                  <AvatarImage src={contributor.imageSrc} alt={`Profile Picture of ${contributor.name}`} />
                  <AvatarFallback>{contributor.fallback}</AvatarFallback>
                </Avatar>
                <p className="text-xl py-4">{contributor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
