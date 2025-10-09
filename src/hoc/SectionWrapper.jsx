// hoc/StarWrapper.jsx (또는 SectionWrapper.jsx)
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName || undefined}                      // ✅ id를 section 자체에 부여
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 scroll-mt-28`}  // ✅ 네비 높이 보정
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
