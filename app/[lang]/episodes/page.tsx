import React from "react";
import { getDictionary } from '../dictionaries'

type params = {
    lang: string
  }


export default async function Episodes({ params }: {params: params}) {
    const dict = await getDictionary(params.lang) // en
    return(
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <h1 className="text-white text-5xl">{dict.episode_page.main}</h1>
            <div className="mt-4 p-4">
                <p className="mb-2 text-zinc-500">{dict.episode_page.title_3}</p>
                <iframe src="https://podcasters.spotify.com/pod/show/beinglab/embed/episodes/ep-e2mj5fl" height="150px" width="400px" frameBorder="0" scrolling="no"></iframe>
                <p className="mb-2 text-zinc-500">{dict.episode_page.title_2}</p>
                <iframe src="https://podcasters.spotify.com/pod/show/beinglab/embed/episodes/ep-e2mi33t/a-abf3sb0" height="150px" width="400px" frameBorder="0" scrolling="no"></iframe>
                <p className="mb-2 text-zinc-500">{dict.episode_page.title_1}</p>
                <iframe src="https://podcasters.spotify.com/pod/show/beinglab/embed/episodes/ep-e2mdrf2/a-abeuj89" height="150px" width="400px" frameBorder="0" scrolling="no"></iframe>
            </div>
        </div>
    )
}