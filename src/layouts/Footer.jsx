// ================================
// Importing required libraries
// ================================
import { Link } from "react-router";
import { motion } from "framer-motion";

// ================================
// Importing Components
// ================================
import Logo from "../components/Logo";

// ================================
// Importing Icons
// ================================
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// ================================
//  List Links
// ================================
const listLinks = [
  { id: 1, title: "الرئيسية", to: "/" },
  { id: 2, title: "المسارات التعليمية", to: "/tracks" },
  { id: 3, title: "الكورسات", to: "/courses" },
  { id: 4, title: "التمارين والمشاريع", to: "/exercises" },
  { id: 5, title: "المجتمع", to: "/community" },
  { id: 6, title: "المقالات ", to: "/articles" },
  { id: 7, title: "محرر الاكواد", to: "/codeEditor" },
];

// ================================
// Motion Variants
// ================================
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 300 } }
};

function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      variants={footerVariants}
      className="py-10 space-y-10 text-center bg-white dark:bg-gray-900 rounded-xl transition-colors"
    >
      {/* Logo and Description */}
      <motion.div variants={itemVariants} className="space-y-1">
        <Logo className="text-5xl mx-auto" />
        <p className="my-5 text-gray-800 dark:text-gray-300 lg:w-[60%] mx-auto leading-8 transition-colors">
          منصه تريبل هي منصة تعليمية متخصصة تهدف إلى تمكين الأفراد من احتراف
          تطوير الويب، سواء في الواجهة الأمامية أو الخلفية، من خلال منهج تعليمي
          متكامل يجمع بين التعلم التفاعلي والتطبيق العملي
        </p>
      </motion.div>

      {/* Navigation Links */}
      <motion.ul
        variants={itemVariants}
        className="flex flex-col lg:flex-row gap-5 justify-center items-center"
      >
        {listLinks.map((link) => (
          <motion.li
            key={link.id}
            variants={itemVariants}
            whileHover={{ scale: 1.2, color: "#6366F1", transition: { type: "spring", stiffness: 300 } }}
            className="text-black dark:text-white cursor-pointer transition-colors"
          >
            <Link to={link.to}>{link.title}</Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Social Icons */}
      <motion.ul
        variants={itemVariants}
        className="flex gap-6 justify-center items-center text-black dark:text-white"
      >
        {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.3, rotate: 10, transition: { type: "spring", stiffness: 300 } }}
            className="cursor-pointer"
          >
            <Icon fontSize={30} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.footer>
  );
}

export default Footer;
