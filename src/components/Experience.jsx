import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

const experiences = [
  {
    number: "01",
    role: "Google Cloud Generative AI",
    company: "Smartbridgonal Services Pvt Ltd",
    location: "Hyderabad",
    period: "Dec 2025 — Mar 2026",
    type: "GENERATIVE AI",
    description:
      "Worked on backend development and AI-driven financial analysis solutions using Python, REST APIs, and cloud-based infrastructure.",
    responsibilities: [
      "Designed and developed RESTful APIs using Python",
      "Processed and analyzed financial datasets",
      "Implemented backend logic for data validation and transformation",
      "Integrated AI models into backend services",
      "Built scalable backend architecture for efficient data flow",
      "Collaborated on AI-driven financial analysis solutions",
    ],
    technologies: [
      "Python",
      "REST APIs",
      "Generative AI",
      "Cloud",
      "Backend",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="experience-glow experience-glow-one"></div>
      <div className="experience-glow experience-glow-two"></div>

      <div className="experience-container">

        {/* Heading */}
        <motion.div
          className="section-heading experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            03 — EXPERIENCE
          </span>

          <h2>
            Where I've learned
            <br />
            <span>and built.</span>
          </h2>

          <p>
            My journey through software development,
            backend engineering, and Generative AI.
          </p>
        </motion.div>


        {/* Timeline */}
        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >

          <div className="timeline-line"></div>

          {experiences.map((experience) => (
            <motion.article
              className="experience-item"
              key={experience.number}
              variants={itemVariants}
            >

              {/* Timeline Node */}
              <div className="timeline-node">
                <span></span>
              </div>


              {/* Number */}
              <div className="experience-number">
                {experience.number}
              </div>


              {/* Experience Card */}
              <motion.div
                className="experience-card"
                whileHover={{ y: -6 }}
              >

                {/* Top */}
                <div className="experience-card-top">

                  <div className="experience-icon">
                    <FiBriefcase />
                  </div>

                  <span className="experience-type">
                    {experience.type}
                  </span>

                </div>


                {/* Role */}
                <h3>
                  {experience.role}
                </h3>


                {/* Company */}
                <div className="experience-company">
                  <strong>
                    {experience.company}
                  </strong>

                  <span>
                    <FiArrowUpRight />
                  </span>
                </div>


                {/* Meta */}
                <div className="experience-meta">

                  <span>
                    <FiCalendar />
                    {experience.period}
                  </span>

                  <span>
                    <FiMapPin />
                    {experience.location}
                  </span>

                </div>


                {/* Description */}
                <p className="experience-description">
                  {experience.description}
                </p>


                {/* Responsibilities */}
                <div className="experience-responsibilities">

                  {experience.responsibilities.map(
                    (item, index) => (
                      <motion.div
                        className="experience-responsibility"
                        key={item}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.06,
                        }}
                      >
                        <span className="responsibility-dot"></span>

                        <span>
                          {item}
                        </span>
                      </motion.div>
                    )
                  )}

                </div>


                {/* Technologies */}
                <div className="experience-technologies">

                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </motion.div>

            </motion.article>
          ))}

        </motion.div>


        {/* Bottom */}
        <motion.div
          className="experience-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>
            The journey continues
          </span>

          <div></div>

          <strong>
            More to build.
          </strong>
        </motion.div>

      </div>

    </section>
  );
}

export default Experience;