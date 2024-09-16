// app/layout.js
import Navbar from "./components/Navbar";
import "./globals.css"; // Make sure to import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <p>© 2024 TechTide. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
