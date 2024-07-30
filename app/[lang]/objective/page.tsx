import React from "react";
import { getDictionary } from '../dictionaries'

type params = {
    lang: string
  }


export default async function Episodes({ params }: {params: params}) {
    const dict = await getDictionary(params.lang) // en
    return(
        <div className="flex flex-col justify-center w-full h-full overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <h1>Documents</h1>
            <p>Here are the documents for the 3F (Fund for Found) Project</p>
            <p>Documentation System:</p>
            <p>Product Research:</p>
            <p>Crypto Reports:</p>
            <p>Community:</p>
        </div>
    )
}