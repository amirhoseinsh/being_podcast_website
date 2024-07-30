"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul className="flex items-center justify-center gap-4">
        <p className="text-sm duration-500 text-zinc-500">Language:</p>
        {i18n.locales.map((locale) => {
          return (
            <li  key={locale}>
              <Link className="text-sm duration-500 text-zinc-500 hover:text-zinc-300" href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}