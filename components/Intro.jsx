import styles from "../styles/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>AVOCADO</span>DIGITAL PRODUCT AGENCY</h1>
        </div>
        <div className={styles.card}>second</div>

    </div>
  )
}

export default Intro