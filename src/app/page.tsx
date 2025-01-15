import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <ul>
        <li>С днем рождения!💖</li>
      </ul>
      <Image
        src="/me.webp"
        width={960}
        height={1280}
        priority
        alt="С днем рождения!💖"
      />
    </div>
  );
}
