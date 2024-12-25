import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-neutral-800 bg-neutral-100">
        <main className="px-5 pt-4 pb-8">{children}</main>
      </body>
    </html>
  );
}
