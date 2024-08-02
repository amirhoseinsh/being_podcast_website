import React from "react";
import { getDictionary } from "../../dictionaries";
// import { Box, Text, Card } from "@radix-ui/themes";
type params = {
  lang: string;
};

export default async function Episodes({ params }: { params: params }) {
  const dict = await getDictionary(params.lang); // en
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <h1>3F Repository</h1>
      </div>
    </>
  );
}
