import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaGoogle,
  FaDatabase,
  FaCode,
  FaCloud,
} from "react-icons/fa6";

import {
  FiCpu,
  FiGlobe,
  FiDatabase as DatabaseIcon,
  FiTool,
} from "react-icons/fi";

const skillCategories = [
  {
    number: "01",
    title: "Languages",
    icon: <FaCode />,
    skills: [
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "Java",
        icon: <FaJava />,
      },
    ],
  },

  {
    number: "02",
    title: "Web Technologies",
    icon: <FiGlobe />,
    skills: [
      {
        name: "HTML",
        icon: <FaHtml5 />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "React.js",
        icon: <FaReact />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
    ],
  },

  {
    number: "03",
    title: "Machine Learning",
    icon: <FiCpu />,
    skills: [
      {
        name: "TensorFlow",
        icon: <FaCode />,
      },
      {
        name: "Keras",
        icon: <FaCode />,
      },
      {
        name: "Scikit-learn",
        icon: <FaCode />,
      },
      {
        name: "OpenCV",
        icon: <FaCode />,
      },
      {
        name: "NumPy",
        icon: <FaDatabase />,
      },
      {
        name: "Pandas",
        icon: <FaDatabase />,
      },
    ],
  },

  {
    number: "04",
    title: "Cloud",
    icon: <FaCloud />,
    skills: [
      {
        name: "Google Cloud",
        icon: <FaGoogle />,
      },
    ],
  },

  {
    number: "05",
    title: "Database",
    icon: <DatabaseIcon />,
    skills: [
      {
        name: "MySQL",
        icon: <FaDatabase />,
      },
    ],
  },

  {
    number: "06",
    title: "Developer Tools",
    icon: <FiTool />,
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
      {
        name: "VS Code",
        icon: <FaCode />,
      },
      {
        name: "PyCharm",
        icon: <FaCode />,
      },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* Background Glow */}
      <div className="skills-background-glow" />

      <div className="skills-container">

        {/* Heading */}
        <motion.div
          className="skills-heading"
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="skills-label">
            03 — TECHNOLOGY STACK
          </span>

          <h2>
            Tools I use to
            <br />
            <span>build things.</span>
          </h2>

          <p>
            A practical technology stack built through projects,
            development experience, and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">

          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              className="skill-category-card"
              key={category.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
            >

              {/* Card Top */}
              <div className="skill-card-top">

                <motion.div
                  className="skill-category-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                >
                  {category.icon}
                </motion.div>

                <span className="skill-number">
                  {category.number}
                </span>

              </div>

              {/* Category Title */}
              <h3>{category.title}</h3>

              {/* Technology Logos */}
              <div className="skill-logo-grid">

                {category.skills.map((skill, index) => (
                  <motion.div
                    className="skill-logo-item"
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay:
                        categoryIndex * 0.08 +
                        index * 0.05,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    title={skill.name}
                  >

                    <div className="skill-logo">
                      {skill.icon}
                    </div>

                    <span>
                      {skill.name}
                    </span>

                  </motion.div>
                ))}

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;