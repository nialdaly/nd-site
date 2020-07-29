import React from "react"
import styles from "../components/container.module.css"
import thumbnail from "../../static/profile_img.jpeg"
import Container from "../components/container"

const User = props => (
  <div className={styles.user}>
    {/* <img src={thumbnail} className={styles.avatar} alt="" /> */}
    <div className={styles.description}>
      <img src={thumbnail} className={styles.avatar} alt="" />
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.headline}>{props.headline}</p>
      {/* <br></br> */}
      {/* <p className={styles.biography}>{props.biography}</p> */}
      <p className={styles.biography}>I live in London and work at bp plc as a graduate software engineer building tech to help accelerate the energy transition.
      I was born in Ireland and after studying a BEng in Mechanical Engineering and an MSc in Software Development from Queen's University Belfast, I jumped across the water. I have developed a broad interest and experience in Machine Learning, Cloud and Data Science and I enjoy building in these areas.
      </p>
      <p className={styles.biography}>
        I am really keen to develop skills in the area of startups, product management and technology strategy.
        I love talking to people with fresh ideas and a good book recommendation!
    </p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <User
        username="NIAL DALY"
        headline="Mechanical Engineer turned Software Engineer."
      // biography="I live in London and I work at bp plc as a Software Engineer."
      />
    </Container>
  )
}