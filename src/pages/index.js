import React from "react"
import styles from "../components/container.module.css"
import thumbnail from "../../static/profile_img.jpeg"
import Container from "../components/container"

const User = props => (
  <div className={styles.user}>
    <img src={thumbnail} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.headline}>{props.headline}</p>
      <br></br>
      {/* <p className={styles.biography}>{props.biography}</p> */}
      <p className={styles.biography}>I live in London and I work at bp plc as a graduate software engineer.
      I was born in Ireland and after studying a BEng in Mechanical Engineering and an MSc in Software Development at Queen's University Belfast I decided to jump across to London. I have developed a broad interest in ML, Cloud and Data Science and I enjoy building stuff in these areas. I am really keen to develop skills in the area of product management and technology strategy.
        I am always keen to speak to people with fresh ideas, perspectives and a good book recommendation!</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <User
        username="NIAL DALY"
        // avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        headline="Mechanical Engineer turned Software Engineer."
      // biography="I live in London and I work at bp plc as a Software Engineer."
      />
    </Container>
  )
}