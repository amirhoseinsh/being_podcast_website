import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import Image from "next/image";
import { getDictionary } from "./dictionaries";
import LocaleSwitcher from "./LocalSwitcher";

type params = {
  lang: string;
};

export default async function Page({ params }: { params: params }) {
  const dict = await getDictionary(params.lang); // en
  const navigation = [
    { name: dict.title.navigation.title_1, href: "/episodes" },
    { name: dict.title.navigation.title_2, href: "/document" },
    { name: dict.title.navigation.title_3, href: "/objective" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 md:my-16 animate-fade-in">
        <ul className="flex items-center my-4 justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              // locale={params.lang}
              href={`/${params.lang}${item.href}`}
              className="transition font-display delay-150 ease-in-out hover:-translate-y-1 text-sm mdm-4 rounded-md px-4 py-2 duration-500 text-zinc-500 border-2 border-zinc-500 hover:text-zinc-300 hover:border-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Image
        src={"/images/being-logo.transparent.png"}
        width={280}
        height={280}
        alt="being logo"
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        {dict.title.main}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 text-center animate-fade-in">
        <div className="flex gap-4">
          {/* <Link href={"https://discord.gg/FpcCxJtXTT"}>
            <Image
              src="/images/discord.svg"
              width={24}
              height={24}
              alt="discord icon"
            />
          </Link> */}
          <Link
            href={
              "https://podcasts.apple.com/us/podcast/پادکست-فارسی-بودن/id1759999496"
            }
          >
            <Image
              src="/images/apple-podcast.svg"
              width={24}
              height={24}
              alt="youtube icon"
            />
          </Link>
          <Link href={"https://www.youtube.com/@beingpod"}>
            <Image
              src="/images/youtube.svg"
              width={24}
              height={24}
              alt="youtube icon"
            />
          </Link>
          <Link href={"https://instagram.com/beingpodcast"}>
            <Image
              src="/images/instagram.svg"
              width={24}
              height={24}
              alt="instagram icon"
            />
          </Link>
          <Link href={"https://open.spotify.com/show/6Bm7znaOeMn6BFWtwg24M6"}>
            <Image
              src="/images/spotify.svg"
              width={24}
              height={24}
              alt="spotify icon"
            />
          </Link>
          <Link href={"https://castbox.fm/channel/پادکست-فارسی-بودن-id6236693"}>
            <Image
              src="/images/castbox.svg"
              width={23}
              height={23}
              alt="castbox icon"
            />
          </Link>
        </div>
        <div className="flex my-6 justify-center">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}
