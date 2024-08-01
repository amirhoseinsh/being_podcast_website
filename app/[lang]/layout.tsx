import "../../global.css";
import '@radix-ui/themes/styles.css';
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";

const englishMetadata: Metadata = {
  title: {
    default: "Being Podcast",
    template: "%s | beingpodcast.xyz",
  },
  description: "Being Podcast hosted by Amirhosein Shirani and Parsa Bozorgani",
  openGraph: {
    title: "beingpodcast.xyz",
    description:
      "Being Podcast hosted by Amirhosein Shirani and Parsa Bozorgani",
    url: "https://beingpodcast.xyz",
    siteName: "beingpodcast.xyz",
    images: [
      {
        url: "https://beingpodcast.xyz/og.png",
        width: 1080,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Being Podcast",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const metadata: Metadata = {
  title: {
    default: "پادکست فارسی بودن",
    template: "%s | beingpodcast.xyz",
  },
  description: "پادکست بودن به میزبانی امیرحسین شیرانی و پارسا بزرگانی",
  openGraph: {
    title: "beingpodcast.xyz",
    description:
      "پادکست بودن به میزبانی امیرحسین شیرانی و پارسا بزرگانی",
    url: "https://beingpodcast.xyz",
    siteName: "beingpodcast.xyz",
    images: [
      {
        url: "https://beingpodcast.xyz/og.png",
        width: 1080,
        height: 1080,
      },
    ],
    locale: "fa",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Being Podcast",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const peydaRegular = LocalFont({
  src: "../../public/fonts/Peyda-Regular.ttf",
  variable: "--font-inter"
})

const peyda = LocalFont({
  src: "../../public/fonts/Peyda-Regular.ttf",
  variable: "--font-calsans"
})

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fa' }]
  }

type params = {
    lang: string
}

export async function generateMetadata({ params }: {params: params}) {
  return params.lang === "en" ? englishMetadata : metadata;
}

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode;
  params: params
}) {
  return (
    <html lang={params.lang} className={params.lang=="en" ? [inter.variable, calSans.variable].join(" ") : [peydaRegular.variable, peyda.variable].join(" ")} dir={params.lang=="en" ? "ltr": "rtl"}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
          {children}
      </body>
    </html>
  );
}
