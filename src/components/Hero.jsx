import { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  // FaEnvelope,
  FaConnectdevelop,
} from "react-icons/fa";
import PropTypes from "prop-types";

function ProjectBox({ project }) {
  const isValidUrl = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(:\\d{1,5})?" +
        "(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return pattern.test(url);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center">
        <img
          src={project.image}
          alt={project.name}
          className="md:h-medium w-24 h-24 mr-4 rounded-md cursor-pointer"
          onClick={() => window.open(project.link, "_blank")}
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {project.name}
          </h3>
          {isValidUrl(project.link) ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              {project.name === "Sidata" ? (
                <>
                  <FaConnectdevelop className="mr-2 text-2xl hover:scale-110" />
                  View on Browser
                </>
              ) : (
                <>
                  <FaGithub className="mr-2 text-2xl hover:scale-110" />
                  View on GitHub
                </>
              )}
            </a>
          ) : (
            <span className="text-gray-500">
              <FaGithub className="mr-2 text-2xl hover:scale-110" />
              View on GitHub
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectBox.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

function About() {
  const projects = [
    {
      name: "Sidata",
      image: "../public/imageSid.png",
      link: "https://sidata.smkwikrama.sch.id/",
    },
    {
      name: "GoKasir",
      image: "../public/imageGo.png",
      link: "https://github.com/Abisena/12108536-Muhamad-Abisena-Putrawan-2/",
    },
  ];

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          About Me
        </h2>
        <p className="font-semibold mb-5 text-gray-800 dark:text-gray-200">
          Dibawah Ini Merupakan Beberapa Project yang saya kerjakan bersama Team
          Saya dI Sekolah.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Achievement({ achievement }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        onClick={handleOpenModal}
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          {achievement.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Issued by {achievement.issuer}
        </p>
        <p className="text-gray-600 dark:text-gray-300">{achievement.date}</p>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={handleCloseModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full"
              />
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                      id="modal-title"
                    >
                      {achievement.title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Issued by {achievement.issuer}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Achievement.propTypes = {
  achievement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

function Achievements() {
  const achievements = [
    {
      title: "Html And CSS",
      issuer: "My EduSolf & Certiport",
      date: "Des 2023",
      image: "../public/imageHtml.png",
    },
    {
      title: "JavaScript Fundamentals",
      issuer: "Dicoding",
      date: "Okt 2023",
      image: "../public/imageDi.png",
    },
    {
      title: "Internship Starcore Exorty",
      issuer: "Starcore",
      date: "Jul 2023",
      image: "../public/image.png",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <Achievement key={index} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1234567890", name);
    formData.append("entry.0987654321", email);
    formData.append("entry.2468013579", message);

    try {
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScJ_OSfKJht7hHDLbDWgb1nrJQVGI6_LV-Ta5Pj4wZ743hfhw/viewform?usp=sf_link",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      if (response.ok) {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Contact Me
        </h2>
        {sent ? (
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Thank you for your message! I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-800 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 dark:focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-800 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 dark:focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-gray-800 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white dark:focus:bg-gray-800 dark:focus:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a
              href="https://github.com/Abisena"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 mx-2"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/_absnn/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 mx-2"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-abisena-putrawan-504b92292/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300 mx-2"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 text-sm md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Muhamad Abisena Putrawan. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Hero() {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 py-12 md:py-24">
      <div className="container mx-auto relative z-10">
        <div className="p-8 rounded-lg md:p-12 md:flex md:items-center">
          <div className="md:w-1/3 md:text-center md:mr-8">
            <div className="flex justify-center md:justify-start">
              <img
                src="../public/abi.jpg"
                alt="Your Image Description"
                className="w-48 h-30 rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:ml-8 sm:w-2/3">
            <h1 className="text-4xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Hallo!!
            </h1>
            <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
              My Name is Muhamad Abisena Putrawan, Im a Junior BackEnd
              Developer.
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
              <a
                href="https://github.com/Abisena"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <FaGithub className="text-3xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com/_absnn/"
                target="_blank"
                rel="noreferrer"
                className="mr-4"
              >
                <FaInstagram className="text-3xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhamad-abisena-putrawan-504b92292/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300" />
              </a>
              {/* <a href="mailto:your-email-address" className="ml-4">
                <FaEnvelope className="text-3xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300" />
              </a> */}
            </div>
          </div>
        </div>
        <About />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
