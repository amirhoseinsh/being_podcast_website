import { Metadata } from "next";

type params = {
  lang: string;
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: params;
}) {
  return (
    <section>
      <div
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        \{children}
      </div>
    </section>
  );
}
