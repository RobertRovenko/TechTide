// app/privacy-policy/page.js
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Privacy Policy</h1>
      <p className={styles.paragraph}>
        We value your privacy. This site may collect and process personal data,
        including information from your device such as cookies, unique
        identifiers, and other device-specific data. This data may be accessed
        by or shared with third parties, including vendors and partners, as
        necessary for site functionality and analytics.
      </p>
      <p className={styles.paragraph}>
        Some vendors may process your data based on legitimate interest. You
        have the right to object to this processing. For more information and to
        manage or withdraw your consent, please refer to the privacy and cookie
        settings link available at the bottom of this page.
      </p>
      <p className={styles.paragraph}>
        If you have any questions regarding our privacy practices, please
        contact us via the contact information provided on this site.
      </p>
    </div>
  );
}
