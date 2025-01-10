import { ViewTransitions } from "next-view-transitions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="dark:bg-neutral-800 bg-neutral-100">
          <main className="px-5 pt-4">
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
