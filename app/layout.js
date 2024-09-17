// app/layout.js
import Navbar from "./components/Navbar";
import "./globals.css"; // Make sure to import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1555784587312566"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="footer">
          <p>© 2024 TechTide. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Tech Tide",
  description: "Find new tech products!",
  icons: {
    icon: "/images/wave.png", // This is your favicon path
  },
};
