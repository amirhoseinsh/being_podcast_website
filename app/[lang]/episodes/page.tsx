import React from "react";
import { getDictionary } from "../dictionaries";

type params = {
  lang: string;
};

export default async function Episodes({ params }: { params: params }) {
  const dict = await getDictionary(params.lang); // en
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="m-8">
          <h1 className="text-white text-5xl">{dict.episode_page.main}</h1>
        </div>
          <div className="mt-12 mb-4 flex flex-col w-full items-center justify-center">  
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf3" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf4" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf5" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf6" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf7" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf8" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bf9" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
          <div className="m-4 flex flex-col w-full items-center justify-center">
            <iframe className="w-full px-2 md:w-1/3" src="https://embed.acast.com/66c35ec6c657d26e5df049b9/66c35ecbc657d26e5df04bfa" frameBorder="0" width="100%" height="80px"></iframe>
          </div>
    </div>
  );
}
