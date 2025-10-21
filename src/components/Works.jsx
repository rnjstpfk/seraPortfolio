import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

/** 모션 민감 사용자 선호 */
const usePrefersReducedMotion = () => {
  const prefers = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);
  return prefers;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const cardRef = useRef(null);
  const fallback = "/placeholder.png"; // public에 작은 이미지 하나 두면 좋아요

  return (
    <article
      ref={cardRef}
      className="
        group relative bg-tertiary rounded-2xl p-5 h-full w-full
        flex flex-col
        transition-transform duration-300
        hover:scale-[1.03] hover:shadow-xl
        outline-none
      "
      /* ⛔️ 카드 자체 클릭/키보드 동작 제거 (버튼만 작동) */
    >
      {/* 썸네일 - 비율 고정 추천 */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
        <img
          src={image || fallback}
          alt={`${name ?? "프로젝트"} 대표 이미지`}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
          onError={(e) => { e.currentTarget.src = fallback; }}
        />

        {/* 호버 오버레이: Live / Code 버튼만 클릭 가능 */}
        <div
          className="
            pointer-events-none absolute inset-0 opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            bg-black/35
            flex items-end justify-end p-3 gap-2
          "
        >
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                pointer-events-auto inline-flex items-center gap-2
                rounded-full px-3 py-2 text-sm font-medium
                bg-white/90 text-black hover:bg-white
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
              "
              title="Live Demo"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="-ml-0.5">
                <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/>
                <path fill="currentColor" d="M5 5h6v2H7v10h10v-4h2v6H5V5z"/>
              </svg>
              Live
            </a>
          )}

          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                pointer-events-auto inline-flex items-center gap-2
                rounded-full px-3 py-2 text-sm font-medium
                bg-black/80 text-white hover:bg-black
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80
              "
              title="Source Code"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <img src={github} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>

      <div className="mt-5 flex-1 flex flex-col min-h-[140px]">
        <h3 className="text-white font-bold text-[20px] leading-tight">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>

        <div className="mt-auto pt-3 border-t border-white/5 flex flex-wrap gap-2">
          {(tags ?? []).map((tag) => (
            <span key={`${name}-${tag.name}`} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Works = () => {
  const prefersReduced = usePrefersReducedMotion();
  const containerRef = useRef(null);

  useEffect(() => {
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".js-project");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        </p>
      </div>

      {/* 그리드 */}
      <div
        ref={containerRef}
        className="
          mt-16 grid gap-5
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          items-stretch justify-items-center
        "
      >
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="js-project w-full h-full">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "Projects");
