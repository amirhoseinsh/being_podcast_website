import React from "react";
import { getDictionary } from '../dictionaries'

type params = {
    lang: string
  }


export default async function Episodes({ params }: {params: params}) {
    const dict = await getDictionary(params.lang) // en
    return(
        <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <h1 className="m-2 text-5xl text-zinc-300">Objective</h1>
            <p className="text-zinc-300">This podcast has been hosted by <a className=" hover:underline" href="https://wishwork.org/people/amirhosein">Amirhosein Shirani</a> and Parsa Bozorgani</p>
        </div>
    )
}