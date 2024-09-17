// app/components/Navbar.js
import Link from "next/link";
import Image from "next/image"; // Import Image component for optimized loading
import styles from "./Navbar.module.css"; // Optional: If you want to use CSS modules for styling

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {/* Logo inside an li */}
        <li className={styles.navItem}>
          <Link href="/">
            <Image
              src="/wave.png"
              alt="Tech Tide Logo"
              width={40}
              height={40}
              className={styles.navIcon}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
