import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiShield,
  FiActivity,
  FiLayers,
} from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Code Reviewer AI",
    category: "AI DEVELOPER TOOL",
    description:
      "An AI-powered code review platform designed to analyze source code, identify potential issues, and provide intelligent feedback to developers.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Flask",
      "Python",
      "MySQL",
    ],
    icon: <FiCode />,
    github:
      "https://github.com/Nareshk-97/Code-Reviewer-AI",
  },

  {
    number: "02",
    title: "HabitSphere",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A Python-based habit tracking application focused on helping users build consistent habits, track progress, and improve their daily routines.",
    technologies: [
      "Python",
      "Backend",
      "Database",
    ],
    icon: <FiActivity />,
    github:
      "https://github.com/Nareshk-97/HabitSphere",
  },

  {
    number: "03",
    title: "FedGT",
    category: "FEDERATED LEARNING",
    description:
      "A secure Federated Learning system designed to identify malicious clients while preserving data privacy through secure aggregation.",
    technologies: [
      "Python",
      "Machine Learning",
      "Federated Learning",
      "Flask",
      "Pandas",
      "Scikit-learn",
    ],
    icon: <FiShield />,
    github:
      "https://github.com/Nareshk-97/Identification-Of-Malicious-Clients-In-Federated-Learning-With-Secure-Aggregation",
  },

  {
    number: "04",
    title: "Pattern Sense",
    category: "DEEP LEARNING",
    description:
      "A fabric pattern classification system that uses deep learning to recognize and classify different fabric pattern categories.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "OpenCV",
      "NumPy",
    ],
    icon: <FiLayers />,
    github:
      "https://github.com/Nareshk-97/Pattern-Sence-Classifying-Fabric-Patterns-Using-Deep-Learning",
  },

  {
    number: "05",
    title: "Gemini Pro Financial Decoder",
    category: "GENERATIVE AI",
    description:
      "An AI-powered financial analysis platform designed to transform complex financial information into actionable insights.",
    technologies: [
      "Python",
      "Generative AI",
      "Gemini",
      "Streamlit",
      "Pandas",
    ],
    icon: <FiCpu />,
    github:
      "https://github.com/Nareshk-97/Gemini-pro-financial-decoder-Transforming-complex-data-into-actionable-insights",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  return (
    <section
      className="projects-section"
      id="projects"
    >

      {/* Background */}
      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <div className="projects-container">

        {/* Heading */}
        <motion.div
          className="projects-heading"
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
            04 — PROJECTS
          </span>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <p>
            A selection of projects where I combine
            software engineering, artificial intelligence,
            and problem solving.
          </p>

        </motion.div>


        {/* Projects */}
        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.number}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >

              {/* Number */}
              <div className="project-number">
                {project.number}
              </div>


              {/* Visual */}
              <motion.div
                className="project-visual"
                whileHover={{
                  scale: 1.02,
                }}
              >

                <div className="project-visual-grid" />

                <motion.div
                  className="project-icon"
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                >
                  {project.icon}
                </motion.div>

                <div className="project-orbit orbit-one" />
                <div className="project-orbit orbit-two" />

                <span className="project-category">
                  {project.category}
                </span>

              </motion.div>


              {/* Content */}
              <div className="project-content">

                <span className="project-index">
                  PROJECT {project.number}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>


                {/* Actions */}
                <div className="project-actions">

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                  >
                    <FiGithub />
                    View on GitHub
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-arrow"
                    whileHover={{
                      rotate: 45,
                    }}
                    aria-label="Open project"
                  >
                    <FiArrowUpRight />
                  </motion.a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* GitHub CTA */}
        <motion.div
          className="projects-footer"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <span>
            Want to see more?
          </span>

          <a
            href="https://github.com/Nareshk-97?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Explore all repositories
            <FiExternalLink />
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;