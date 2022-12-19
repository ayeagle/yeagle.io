import { MetaHTMLAttributes } from "react"
import Footer from "@components/pomodomo/Footer"
import styles from './BasicPageBottom.module.css'
import Socials from "./Socials"


export default function BasicPageBottom() {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>


      <p > Home </p>
      <p  > Portfolio </p>
      <p  > Resume </p>
      <p  > Creative Work </p>
      <p  > Contact </p>
      <Socials size={"3vw"}/>
      <footer className={styles.footer}>
        Made by <img src="/bagel_logo.png" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>    </>
  )
}
