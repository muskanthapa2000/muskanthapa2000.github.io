import React, { useState, useRef, useContext, useEffect } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';
import { Button } from '../Button/Button';
import { FaUserNinja } from 'react-icons/fa';

const barStyle = {
  bar1: {
    position: 'absolute',
    width: '15px',
    transform: 'rotate(45deg)',
  },
  bar2: {
    position: 'absolute',
    left: '-2px',
  },
  bar3: {
    position: 'absolute',
    width: '15px',
    transform: 'rotate(-45deg)',
  },
};

const circle = {
  background: 'linear-gradient(40deg, #8983F7, #1c2931 70%)',
};
const cresent = {
  transform: 'scale(1)',
};

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null); // Initialize with null
  const lastScrollY = useRef(0);

  const { newTheme, mode, handleMode, open, handleMenu } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsSticky(false); // Scrolling down, make the Navbar not sticky
      } else {
        setIsSticky(true); // Scrolling up, make the Navbar sticky
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButton = () => {};

  return (
	<nav
	ref={navRef}
	className={`${styles.navContainer} ${isSticky ? styles.sticky : ''}`}
	style={{
	  background: `${newTheme.background}`,
	  boxShadow: `3px 3px 10px ${newTheme.line}`,
	  zIndex: '1000', // Ensure the navbar appears above other elements
	}}
  >
      <div className={styles.navbar}>
        <a href='#'>
          <div className={styles.logo}>
            Muskan <FaUserNinja />
          </div>
        </a>

        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.links}
        >
          <a href='#'>Home</a>
          <a href='#about'>About</a>
          <a href='#techStacks'>Skills</a>
          <a href='#projects'>Projects</a>

          <a href='#contact'>Contact</a>
          <a
            className={styles.btn}
            href='https://drive.google.com/file/d/16F5emhw_slWpQijxoWlW0_jcX_Guwysb/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <Button
              text={
                <span className={styles.resumeBtn}>
                  <span>Resume</span>{' '}
                  <i className='fas fa-file-download'></i>
                </span>
              }
              handleButton={handleButton}
            />
          </a>
        </div>
        <button
          aria-label={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
          title={mode === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
          style={{ color: `${newTheme.title}` }}
          className={styles.modeButton}
          onClick={handleMode}
        >
          <div
            className={styles.circle}
            style={mode === 'light' ? circle : {}}
          >
            <div
              style={mode === 'light' ? cresent : {}}
              className={styles.crescent}
            ></div>
          </div>
        </button>

        <div onClick={handleMenu} className={styles.bars}>
          <div
            style={open ? { background: `${newTheme.title}` } : barStyle.bar1}
          ></div>
          <div
            style={open ? { background: `${newTheme.title}` } : barStyle.bar2}
          ></div>
          <div
            style={open ? { background: `${newTheme.title}` } : barStyle.bar3}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
