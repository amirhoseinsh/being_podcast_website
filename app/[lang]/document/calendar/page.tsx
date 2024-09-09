import React from "react";
import Script from "next/script";
import { getDictionary } from "../../dictionaries";
// import { Box, Text, Card } from "@radix-ui/themes";
type params = {
  lang: string;
};

export default async function Episodes({ params }: { params: params }) {
  const dict = await getDictionary(params.lang); // en
  return (
    <>
    <div>
      {/* <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"> */}
        <div className="calendly-inline-widget" data-url="https://calendly.com/d/cp99-rm3-5b9/being-podcast" style={{minWidth: 320, height: 700}}></div>
        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async/>
   </div>
    </>
  );
}
