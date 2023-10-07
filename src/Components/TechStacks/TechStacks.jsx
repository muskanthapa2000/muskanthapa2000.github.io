import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";
import GitHubCalendar from "react-github-calendar";
// import ProgressBar from "react-bootstrap/ProgressBar";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiRedux, SiExpress, SiChakraui,SiNetlify,SiVercel,SiHeroku } from "react-icons/si";
import {VscJson} from "react-icons/vsc"
import { FcTreeStructure } from "react-icons/fc";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Skills
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.skills}>
        <div className={styles.frontend}>
          <div className={styles.techText} style={{color: `${newTheme.title}`}}>Frontend</div>
          <div className={styles.container}>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiHtml5 color="orange" size="50px" />
              <span>HTML</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiCss3 color="blue" size="50px" />
              <span>CSS</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiJavascript1 color="yellow" size="50px" />
              <span>Javascript</span>
            </div>

            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiReact color="#0095da" size="50px" />
              <span>React</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <i
                style={{ color: "#7248B6" }}
                className="devicon-redux-original"
              />
              <SiRedux color="#764abc" size="50px" />
              <span>Redux</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <SiChakraui size="50px" color="#0095da" />

              <span>chakra-UI</span>
            </div>
          </div>
        </div>
        <div className={styles.backend}>
          <div className={styles.techText}  style={{color: `${newTheme.title}`}}>Backend & Data Structures</div>
          <div className={styles.container}>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiNodejs size="50px" />
              <span>Node</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <i className="devicon-express-original" />
              <SiExpress size="50px" color="black" />
              <span>Express</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiMongodb size="50px" color="lightgreen" />
              <span>MongoDB</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <FcTreeStructure size="50px" />

              <span>DSA</span>
            </div>
          </div>
        </div>
        <div className={styles.others}>
          <div className={styles.techText} style={{color: `${newTheme.title}`}}>Tools</div>
          <div className={styles.container}>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <DiGit size="50px" color="brown" />

              <span>Git</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <SiNetlify size="50px" color="lightblue" />

              <span>Netlify</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <SiVercel size="50px" color="darkblue" />

              <span>Vercel</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <SiHeroku size="50px" color="black" />

              <span>Heroku</span>
            </div>
            <div
              style={{
                color: `${newTheme.title}`,
              }}
              className={styles.logoWrapper}
            >
              <VscJson size="50px" color="brown" />

              <span>Json Server</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.githubInfo}>
        <div className={styles.githubcalender}>
          <div style={{fontSize:"18px",fontWeight:"bold" , color: `${newTheme.title}`}}>Days I coded</div>




          <GitHubCalendar style={{color: `${newTheme.title}`}}
            username="muskanthapa2000"
            year={new Date().getFullYear()}
          />
        </div>
        <div className={styles.githubstats}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=muskanthapa2000"
            alt="github_stats"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
