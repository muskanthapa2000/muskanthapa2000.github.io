import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
        Passionate and results-driven Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. Adept at creating dynamic and responsive web applications,
         with a keen eye for user experience and a commitment to delivering high-quality code. <br />
          <br /> Experienced in collaborating with cross-functional teams to turn complex ideas into functional, user-friendly solutions. 
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Looking for an opportunity as a full-stack web developer.
            <br />
          </span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
