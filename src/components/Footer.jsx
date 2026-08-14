import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Nareshk-97",
    icon: <FiGithub />,
    className: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nareshkille/",
    icon: <FiLinkedin />,
    className: "linkedin",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Naresh_97/",
    icon: "LC",
    className: "leetcode",
  },
  {
    name: "Email",
    href: "mailto:nareshkkille97@gmail.com",
    icon: <FiMail />,
    className: "email",
  },
];

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">

            <motion.a
              href="#home"
              className="footer-logo"
              whileHover={{ scale: 1.04 }}
            >
              N<span>.</span>
            </motion.a>

            <p>
              Software Developer building modern web experiences
              and intelligent solutions.
            </p>

          </div>


          {/* Navigation */}
          <div className="footer-column">

            <span className="footer-heading">
              NAVIGATION
            </span>

            <div className="footer-navigation">

              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>


          {/* Connect */}
          <div className="footer-column">

            <span className="footer-heading">
              CONNECT
            </span>

            <div className="footer-connect-links">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`footer-social-link ${social.className}`}
                  target={
                    social.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noreferrer"
                  }
                  whileHover={{
                    x: 5,
                  }}
                >

                  <span className="footer-social-icon">
                    {social.icon}
                  </span>

                  <span>
                    {social.name}
                  </span>

                  <FiArrowUpRight className="footer-arrow" />

                </motion.a>
              ))}

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 Naresh Kille
          </span>

          <span className="footer-made">
            Designed & built with
            <span className="heart"> ♥ </span>
            using React
          </span>

          <div className="footer-social-icons">

            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className={`footer-bottom-icon ${social.className}`}
                target={
                  social.name === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.name === "Email"
                    ? undefined
                    : "noreferrer"
                }
                aria-label={social.name}
                whileHover={{
                  y: -5,
                  scale: 1.12,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                {social.icon}
              </motion.a>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;