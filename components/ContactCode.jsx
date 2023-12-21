import styles from '../styles/ContactCode.module.css';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

const contactItems = [
  {
    social: 'website',
    link: 'sashakhoo.github.io',
    href: 'https://sashakhoo.github.io',
    icon: <FaGlobe />,
  },
  {
    social: 'email',
    link: 'sashakhoo8@gmail.com',
    href: 'mailto:sashakhoo8@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    social: 'github',
    link: 'sashakhoo',
    href: 'https://github.com/sashakhoo',
    icon: <FaGithub />,
  },
  {
    social: 'linkedin',
    link: 'Natasya Khoo',
    href: 'https://www.linkedin.com/in/natasyakhoo/',
    icon: <FaLinkedin />,
  },
  {
    social: 'whatsapp',
    link: 'sashakhoo',
    href: 'https://wa.link/jswxqp',
    icon: <FaWhatsapp />,
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.icon} {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
