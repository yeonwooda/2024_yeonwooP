import { fade } from "@/style/animation/fade";
import { motion } from "@/style/animation/motion";
import { typing } from "@/style/animation/typing";
import gsap from "gsap";
import { MotionPathPlugin, TextPlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

const Intro = () => {
  const introText = useRef(null);
  const rocket = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(introText.current, typing.intro.start, typing.intro.end)
      .fromTo(rocket.current, typing.rocket.start, typing.rocket.end)
      .fromTo(rocket.current, fade.fadeIn.start, fade.fadeIn.end)
      .fromTo(rocket.current, motion.spin.start, motion.spin.end)
      .fromTo(rocket.current, motion.launch.start, motion.launch.end);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span ref={introText}></span>
      <span
        ref={rocket}
        style={{
          display: "inline-block",
        }}
      >
        happy
      </span>
    </div>
  );
};

export default Intro;
