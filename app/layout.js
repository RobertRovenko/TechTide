// app/layout.js
import Navbar from "./components/Navbar";
import "./globals.css"; // Import global styles

export const metadata = {
  title: "Tech Tide",
  description: "Find new tech products!",
  icons: {
    icon: "/wave.png", // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* This ensures metadata is injected correctly */}</head>
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
