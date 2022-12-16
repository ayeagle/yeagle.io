import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by <img src="/bagel_logo.png" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
