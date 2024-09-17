// pages/about.js
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About TechTide</h1>
      <p className={styles.intro}>
        Welcome to TechTide, your go-to destination for the latest in
        technology! We specialize in reviewing and showcasing top products from
        Amazon, helping you make informed decisions about your tech purchases.
      </p>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>What We Do</h2>
        <p className={styles.text}>
          At TechTide, we bring you in-depth reviews of the best tech products
          available on Amazon. From gadgets to home appliances, our goal is to
          provide you with accurate, honest, and helpful information. We
          leverage our expertise to highlight the most innovative and useful
          products, ensuring you get the most value for your money.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Our Commitment</h2>
        <p className={styles.text}>
          We are committed to transparency and integrity in our reviews. As an
          Amazon affiliate, we may earn a commission from purchases made through
          our links. However, our reviews are always unbiased and based on
          thorough research and testing.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Privacy and Disclaimer</h2>
        <p className={styles.text}>
          Please note that we are not responsible for the products linked on
          Amazon. For product-specific issues, please contact the respective
          sellers directly.
        </p>
      </section>
      <footer className={styles.footer}>
        <p>Thank you for visiting TechTide!</p>
      </footer>
    </div>
  );
}
