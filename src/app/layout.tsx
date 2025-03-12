import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Data skate",
  description: "Welcome back! Please enter your details.",
  openGraph: {
    title: "Data skate",
    description: "Welcome back! Please enter your details.",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Data skate Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data skate",
    description: "Welcome back! Please enter your details.",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
