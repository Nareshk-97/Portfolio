import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

const aboutCards = [
  {
    icon: <FiCode />,
    title: "Full Stack Development",
    text: "Building responsive and scalable web applications with modern frontend and backend technologies.",
  },
  {
    icon: <FiCpu />,
    title: "AI & Machine Learning",
    text: "Developing intelligent solutions using machine learning, deep learning, and generative AI.",
  },
  {
    icon: <FiDatabase />,
    title: "Backend & APIs",
    text: "Creating reliable APIs and backend systems using Python, Flask, databases, and clean architecture.",
  },
  {
    icon: <FiLayers />,
    title: "Problem Solving",
    text: "Enjoy solving programming problems and continuously improving my data structures and algorithms skills.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function About() {
  return (
    <section className="about-section" id="about">

      {/* Background */}
      <div className="about-glow"></div>

      <div className="about-container">

        {/* Section Header */}
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-label">
            01 — ABOUT ME
          </span>

          <h2>
            Building with purpose.
            <br />
            <span>Learning with curiosity.</span>
          </h2>

          <p>
            A passionate developer focused on creating useful,
            intelligent, and visually engaging digital experiences.
          </p>
        </motion.div>


        {/* Main About Layout */}
        <div className="about-layout">

          {/* Left Profile Card */}
          <motion.div
            className="about-profile-card"
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -6,
            }}
          >

            <div className="profile-glow"></div>

            <div className="profile-top">

              <div className="profile-avatar">
                NK
              </div>

              <div>
                <span className="profile-status">
                  <span></span>
                  OPEN TO WORK
                </span>

                <h3>
                  Naresh Kille
                </h3>

                <p>
                  Software Developer
                </p>
              </div>

            </div>


            <div className="profile-line"></div>


            <div className="profile-info">

              <div>
                <span>FOCUS</span>
                <strong>
                  Software & AI
                </strong>
              </div>

              <div>
                <span>STACK</span>
                <strong>
                  Python + React
                </strong>
              </div>

              <div>
                <span>INTEREST</span>
                <strong>
                  Generative AI
                </strong>
              </div>

            </div>


            <a
              href="#projects"
              className="profile-link"
            >
              Explore my work
              <FiArrowUpRight />
            </a>

          </motion.div>


          {/* Right Content */}
          <motion.div
            className="about-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <motion.p
              className="about-intro"
              variants={itemVariants}
            >
              I'm a Computer Science graduate passionate about
              <span> software development, artificial intelligence,
              and modern web technologies.</span>
            </motion.p>

            <motion.p
              className="about-text"
              variants={itemVariants}
            >
              I enjoy turning ideas into practical applications,
              from responsive web interfaces and backend APIs to
              machine learning and AI-powered solutions. My goal is
              to continuously learn, build meaningful projects, and
              grow as a software developer.
            </motion.p>


            {/* About Cards */}
            <motion.div
              className="about-cards"
              variants={containerVariants}
            >

              {aboutCards.map((card) => (
                <motion.div
                  className="about-card"
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -7,
                  }}
                >

                  <div className="about-card-icon">
                    {card.icon}
                  </div>

                  <div>
                    <h4>
                      {card.title}
                    </h4>

                    <p>
                      {card.text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </motion.div>

          </motion.div>

        </div>


        {/* Bottom Stats */}
        <motion.div
          className="about-stats"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div className="about-stat">
            <strong>04+</strong>
            <span>Projects Built</span>
          </div>

          <div className="stat-divider"></div>

          <div className="about-stat">
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div className="stat-divider"></div>

          <div className="about-stat">
            <strong>∞</strong>
            <span>Curiosity to Learn</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;