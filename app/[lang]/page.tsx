import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import Image from "next/image";
import { getDictionary } from './dictionaries'

type params = {
  lang: string
}

export default async function Page({ params }: {params: params}) {
  const dict = await getDictionary(params.lang) // en

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav> */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Image src={"/images/being-logo.transparent.png"} width={280} height={280} alt="being logo"
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {dict.title.main}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in">
        <div className="flex gap-4">
         <Link href={"https://youtube.com"}><Image src="/images/youtube.svg" width={24} height={24} alt="youtube icon"/></Link>
         <Link href={"https://instagram.com"}><Image src="/images/instagram.svg" width={24} height={24} alt="instagram icon"/></Link>
         <Link href={"https://discord.com"}><Image src="/images/spotify.svg" width={24} height={24} alt="spotify icon"/></Link>
        </div>
      </div>
    </div>
  );

}
