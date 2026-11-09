import { motion } from "framer-motion";

const MotionTags = { div: motion.div, li: motion.li, article: motion.article, figure: motion.figure };

export default function Reveal({ children, delay = 0, as = "div", className = "", ...props }) {
  const MotionTag = MotionTags[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
