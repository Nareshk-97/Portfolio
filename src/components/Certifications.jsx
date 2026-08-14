import { motion } from "framer-motion";
import {
  FiAward,
  FiCloud,
  FiCode,
  FiCpu,
  FiExternalLink,
} from "react-icons/fi";

const certifications = [
  {
    number: "01",
    title: "Artificial Intelligence & Machine Learning",
    issuer: "AI & Machine Learning",
    icon: <FiCpu />,
    link:
      "https://drive.google.com/file/d/1kHa47ATjvthFf-vBfewfJZfBru4VLahC/view",
  },

  {
    number: "02",
    title: "Google Cloud Generative AI",
    issuer: "Google Cloud",
    icon: <FiCloud />,
    link:
      "https://drive.google.com/file/d/1WieR36KOtNy45nfcytCblmm6VF_8P65d/view",
  },

  {
    number: "03",
    title: "Python",
    issuer: "HackerRank",
    icon: <FiCode />,
    link:
      "https://www.hackerrank.com/certificates/5533ad2c12ba",
  },

  {
    number: "04",
    title: "Google Cloud Computing",
    issuer: "Google Cloud",
    icon: <FiCloud />,
    link:
      "https://www.credly.com/badges/b2438ea0-d5a7-4778-8cca-7905093ed97e/linked_in_profile",
  },

  {
    number: "05",
    title: "ServiceNow Platform Fundamentals",
    issuer: "ServiceNow",
    icon: <FiAward />,
    link: "",
  },
];

function Certifications() {
  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      {/* Background Glow */}
      <div className="certifications-glow" />

      <div className="certifications-container">

        {/* Heading */}
        <motion.div
          className="certifications-heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-label">
            05 — CERTIFICATIONS
          </span>

          <h2>
            Learning that
            <br />
            <span>keeps growing.</span>
          </h2>

          <p>
            Certifications that strengthen my foundation
            across artificial intelligence, cloud computing,
            Python, and modern technology platforms.
          </p>
        </motion.div>


        {/* Certification Cards */}
        <div className="certifications-grid">

          {certifications.map((certificate, index) => (

            <motion.article
              className="certification-card"
              key={certificate.number}

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
                delay: index * 0.08,
              }}

              whileHover={{
                y: -8,
              }}
            >

              {/* Card Top */}
              <div className="certification-top">

                <span className="certification-number">
                  {certificate.number}
                </span>

                <FiExternalLink />

              </div>


              {/* Icon */}
              <motion.div
                className="certification-icon"

                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
              >
                {certificate.icon}
              </motion.div>


              {/* Content */}
              <div className="certification-content">

                <span>
                  CERTIFICATION
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.issuer}
                </p>

              </div>


              {/* Certificate Button */}
              {certificate.link ? (

                <motion.a
                  className="certificate-link"
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{
                    x: 5,
                  }}
                >
                  View Certificate

                  <FiExternalLink />
                </motion.a>

              ) : (

                <span className="certificate-link-disabled">
                  Certificate link unavailable
                </span>

              )}

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;