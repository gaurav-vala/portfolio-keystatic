import { ViewTransitions } from "next-view-transitions";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageTitle = "Gaurav Vala – Developer & Creator";
  const pageDescription =
    "Gaurav Vala is a front-end developer and content creator. Explore his projects, tech stack, developer blogs. Connect with him to learn more about his work and interests.";

  return (
    <ViewTransitions>
      <html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" type="image/png" href="/favicon.png" />

          {/* Basic Meta Tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={pageDescription} />
          <title>{pageTitle}</title>

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:url" content="https://gauravvala.vercel.app/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          {/* Optional Twitter handles */}
          {/* <meta name="twitter:site" content="@yourhandle" /> */}
          {/* <meta name="twitter:creator" content="@yourhandle" /> */}
        </Head>
        <body className="dark:bg-neutral-800 bg-neutral-100">
          <main className="px-5 pt-4">{children}</main>
        </body>
      </html>
    </ViewTransitions>
  );
}
