import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Dict = {
    title: {
      navigation: {
        title_1: string;
        title_2: string;
        title_3: string;
      };
    };
  };

export default async function Navigation({ dict, lang }: { dict: Dict, lang: string }) {

    const navigation = [
        { name: dict.title.navigation.title_1, href: "/episodes" },
        { name: dict.title.navigation.title_2, href: "/document" },
        { name: dict.title.navigation.title_3, href: "/objective" },
      ];
    return(
        <nav className="mt-12 md:mt-24">
        <ul className="flex items-center mt-4 justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              // locale={params.lang}
              href={`/${lang}${item.href}`}
              className="transition font-display delay-150 ease-in-out hover:-translate-y-1 text-sm mdm-4 rounded-md px-4 py-2 duration-500 text-zinc-500 border-2 border-zinc-500 hover:text-zinc-300 hover:border-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    )
}