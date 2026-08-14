import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const heroText = "NARESH KILLE";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Particles */}
      <div className="hero-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-content">

          {/* Availability */}
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="availability-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <h1 className="hero-title">

            <span className="hero-name">
              {heroText.split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.06,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>

            <motion.span
              className="hero-dot"
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.5,
                type: "spring",
              }}
            >
              .
            </motion.span>

          </h1>

          {/* Role */}
          <motion.div
            className="hero-role"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.1,
            }}
          >
            <span>SOFTWARE DEVELOPER</span>

            <div className="role-line" />

            <span className="role-highlight">
              PYTHON • REACT • AI
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.3,
            }}
          >
            I build modern web applications and intelligent
            software solutions by combining clean code,
            thoughtful design, and artificial intelligence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.5,
            }}
          >

            {/* Explore */}
            <motion.a
              href="#projects"
              className="hero-primary-button"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Explore My Work
              <FiArrowUpRight />
            </motion.a>

            {/* Resume */}
            <motion.a
              href="/resume.pdf"
              download="Naresh-Kille-Resume.pdf"
              className="hero-secondary-button"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Download Resume
              <FiDownload />
            </motion.a>

          </motion.div>

          {/* Socials */}
          <motion.div
            className="hero-socials"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.7,
            }}
          >

            <span className="social-label">
              CONNECT
            </span>

            <div className="social-divider" />

            {/* GitHub */}
            <motion.a
              href="https://github.com/Nareshk-97"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link github"
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
              aria-label="GitHub"
            >
              <FiGithub />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/nareshkille/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link linkedin"
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </motion.a>

            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/u/Naresh_97/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link leetcode"
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
              aria-label="LeetCode"
            >
              LC
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:nareshkkille97@gmail.com"
              className="hero-social-link email"
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
              aria-label="Email"
            >
              <FiMail />
            </motion.a>

          </motion.div>

        </div>


        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.7,
            x: 60,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Rotating rings */}
          <motion.div
            className="visual-ring ring-one"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="visual-ring ring-two"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Orb */}
          <motion.div
            className="hero-orb"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="orb-inner">

              <div className="orb-core" />

              <div className="orb-code">
                <span>&lt;</span>
                <strong>DEV</strong>
                <span>/&gt;</span>
              </div>

              <div className="orb-status">
                <span />
                BUILDING
              </div>

            </div>

          </motion.div>

          {/* Python */}
          <motion.div
            className="floating-card card-python"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>PY</span>
            Python
          </motion.div>

          {/* React */}
          <motion.div
            className="floating-card card-react"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>⚛</span>
            React
          </motion.div>

          {/* AI */}
          <motion.div
            className="floating-card card-ai"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>✦</span>
            AI / ML
          </motion.div>

        </motion.div>

      </div>


      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.div
          className="scroll-line"
          animate={{
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

    </section>
  );
}

export default Hero;