import { Metadata } from "next";

type params = {
    lang: string
}

const englishMetadata: Metadata = {
  title: "Document",
  description: "Being Podcast Documents",
  openGraph: {
    title: "beingpodcast.xyz",
    description:
      "Being Podcast Documents",
    images: [
      {
        url: "https://beingpodcast.xyz/images/og.png",
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
    title: "Being Podcast Document",
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
        url: "https://beingpodcast.xyz/images/og.png",
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
    title: "Being Podcast Document",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

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
   <section>
        <div className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        </div>
      </section>
  );
}
