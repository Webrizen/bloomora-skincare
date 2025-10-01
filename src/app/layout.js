import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/system/navbar";

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});


export const metadata = {
  title: "Bloomora Skincare - Nourish Your Glow, Naturally.",
  description: "Discover the essence of natural beauty with Bloomora Skincare. Our products are crafted with care to enhance your skin's radiance and health.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${BricolageGrotesque.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
