import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Tech Review Site</h1>
      <p>Stay tuned for the latest reviews!</p>

      <Link href="/about">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to About Page
        </button>
      </Link>
    </div>
  );
}
