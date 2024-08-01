import React from "react";
import { getDictionary } from "../dictionaries";
// import { Box, Text, Card } from "@radix-ui/themes";
import {
  ArrowDownOnSquareIcon,
  BeakerIcon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
type params = {
  lang: string;
};

export default async function Episodes({ params }: { params: params }) {
  const dict = await getDictionary(params.lang); // en
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="m-8 items-center">
        <div>
          <h1 className="text-5xl text-zinc-500">{dict.documents.title}</h1>
        </div>
        <div className="text-zinc-500 mt-2">
          <p className="">
            {dict.documents.description}
          </p>
          <div className="p-4 m-2 group flex flex-row border-4 border-zinc-500 rounded-md hover:cursor-pointer hover:border-white hover:text-white">
            <ArrowDownOnSquareIcon className="size-5 text-zinc-500 mr-2 group-hover:text-white" />
            <p className="">{dict.documents.section_1}</p>
          </div>
          <div className="p-4 m-2 group flex flex-row border-4 border-zinc-500 rounded-md hover:cursor-pointer hover:border-white hover:text-white">
            <BeakerIcon className="size-5 text-zinc-500 mr-2 group-hover:text-white" />
            <p className="">{dict.documents.section_2}</p>
          </div>
          <div className="p-4 m-2 group flex flex-row border-4 border-zinc-500 rounded-md hover:cursor-pointer hover:border-white hover:text-white">
            <DocumentMagnifyingGlassIcon className="size-5 text-zinc-500 mr-2 group-hover:text-white" />
            <p className="">{dict.documents.section_3}</p>
          </div>
          <div className="p-4 m-2 group flex flex-row border-4 border-zinc-500 rounded-md hover:cursor-pointer hover:border-white hover:text-white">
            <GlobeAltIcon className="size-5 text-zinc-500 mr-2 group-hover:text-white" />
            <p className="">{dict.documents.section_4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
