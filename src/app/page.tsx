import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Hello World</h2>
      </div>
    </div>
  );
}