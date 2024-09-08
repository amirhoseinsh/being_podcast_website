import React from "react";
import { getDictionary } from '../dictionaries'
import Navigation from "@/app/components/navigation";

type params = {
    lang: string
  }


export default async function Episodes({ params }: {params: params}) {
    const dict = await getDictionary(params.lang) // en
    return(
        <div className="flex h-screen w-full flex-col items-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <Navigation dict={dict} lang={params.lang}/>
            <h1 className="m-4 mt-8 text-5xl text-zinc-300">Objective</h1>
            <div className="mx-4 md:mx-32">
                <p className="text-zinc-300 my-2">This podcast has been hosted by <a className=" hover:underline" href="https://wishwork.org/people/amirhosein">Amirhosein Shirani</a> and Parsa Bozorgani</p>
                <p className="text-zinc-300">
                        We are on a passionate mission to create incredible things and stream them for everyone. Our goal is to make these creations accessible 
                        to all and show that creating is within everyone&apos;s reach. That&apos;s why we started this podcast—to amplify the voices of founders and reveal
                        that creating can truly make the world a better place. Join us on this journey and experience the pure joy of creation!</p>
            </div>            
        </div>
    )
}