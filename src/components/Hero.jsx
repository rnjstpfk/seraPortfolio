import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative w-full min-h-[620px] md:h-screen mx-auto">
      {/* 왼쪽 보라색 선 + 텍스트 */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-20 md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-20 md:mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">권세라</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            디자인과 개발의 경계를 잇는 프론트엔드 개발자입니다.
            <br />
            작은 디테일이 완성도를 만든다고 믿습니다.
          </p>
        </div>
      </div>

      {/*데스크톱에서만 3D 컴퓨터 표시 */}
      {isDesktop && (
        <div className="relative w-full md:h-full">
          <ComputersCanvas />
        </div>
      )}

      {/* 스크롤 인디케이터 */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
