import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">
            05 — CONTACT
          </span>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <p>
            Have an idea, opportunity, or project in mind?
            Let's connect and turn it into something meaningful.
          </p>
        </motion.div>


        {/* Main Contact Grid */}
        <div className="contact-grid">

          {/* Left */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="contact-intro">
              <span className="contact-small-label">
                GET IN TOUCH
              </span>

              <h3>
                Let's talk about
                <br />
                <span>your next idea.</span>
              </h3>
            </div>


            {/* Email */}
            <motion.a
              className="contact-detail"
              href="mailto:nareshkkille97@gmail.com"
              whileHover={{ x: 6 }}
            >
              <div className="contact-detail-icon">
                <FiMail />
              </div>

              <div>
                <small>Email</small>
                <strong>
                  nareshkkille97@gmail.com
                </strong>
              </div>

              <FiArrowUpRight className="contact-detail-arrow" />
            </motion.a>


            {/* Phone */}
            <motion.a
              className="contact-detail"
              href="tel:+919392406858"
              whileHover={{ x: 6 }}
            >
              <div className="contact-detail-icon">
                <FiPhone />
              </div>

              <div>
                <small>Phone</small>
                <strong>
                  +91 93924 06858
                </strong>
              </div>

              <FiArrowUpRight className="contact-detail-arrow" />
            </motion.a>


            

            {/* Social Links */}
            <div className="contact-socials">

              <span>
                CONNECT
              </span>

              <div className="contact-social-line" />

              <motion.a
                href="https://github.com/Nareshk-97"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
              >
                <FiGithub />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/nareshkille/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
              >
                <FiLinkedin />
              </motion.a>

              <motion.a
                href="https://leetcode.com/u/Naresh_97/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
              >
                LC
              </motion.a>

            </div>

          </motion.div>


          {/* Right Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            <div className="contact-form-top">
              <span>
                SEND A MESSAGE
              </span>

              <div className="contact-form-status">
                <span />
                ONLINE
              </div>
            </div>


            <form
              onSubmit={(e) => {
                e.preventDefault();

                const name =
                  e.target.name.value;

                const email =
                  e.target.email.value;

                const message =
                  e.target.message.value;

                const subject =
                  encodeURIComponent(
                    `Portfolio Contact from ${name}`
                  );

                const body =
                  encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  );

                window.location.href =
                  `mailto:nareshkkille97@gmail.com?subject=${subject}&body=${body}`;
              }}
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label>
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>


                <div className="contact-field">
                  <label>
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

              </div>


              <div className="contact-field">
                <label>
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>


              <motion.button
                type="submit"
                className="contact-submit"
                whileHover={{
                  scale: 1.02,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Send Message
                <FiSend />
              </motion.button>

            </form>

          </motion.div>

        </div>


        {/* Bottom CTA */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <div />

          <strong>
            Let's make it happen.
          </strong>
        </motion.div>

      </div>

    </section>
  );
}

export default Contact;