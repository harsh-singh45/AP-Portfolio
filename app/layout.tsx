import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Body font — clean, highly legible
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display font — geometric & technical, fits an engineering portfolio
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Mono font — used for skill tags / code-like accents
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Aparna Tiwari — UI/UX Developer & Frontend Engineer",
    template: "%s | Aparna Tiwari",
  },

  description:
    "Aparna Tiwari is a UI/UX Developer and Computer Engineering student passionate about building modern, responsive, and user-friendly web experiences. Explore her projects, skills, and portfolio.",

  keywords: [
    "Aparna Tiwari",
    "UI/UX Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "React Developer",
    "MERN Stack Developer",
    "Computer Engineering Student",
    "Java Developer",
    "Web Developer Portfolio",
    "Product Design",
    "User Experience Design",
  ],

  authors: [{ name: "Aparna Tiwari" }],
  creator: "Aparna Tiwari",
  publisher: "Aparna Tiwari",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://your-domain.com",
    title: "Aparna Tiwari — UI/UX Developer & Frontend Engineer",
    description:
      "Explore Aparna Tiwari's portfolio, showcasing modern UI/UX design, frontend engineering, and full-stack development projects.",
    siteName: "Aparna Tiwari Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aparna Tiwari — UI/UX Developer",
    description:
      "Building modern web experiences with clean UI, intuitive interactions, and scalable frontend architecture.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
