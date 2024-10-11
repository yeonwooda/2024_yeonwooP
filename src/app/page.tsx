"use client";

import FullScreen from "@/components/FullScreen";
import Intro from "@/components/Intro";
import { useEffect, useRef } from "react";

const Home = () => {
  const timeline = useRef(gsap.timeline({ paused: true })); // 하나의 타임라인 사용

  useEffect(() => {
    timeline.current.play(); // 타임라인 재생
  }, []);

  return (
    <div>
      <Intro timeline={timeline.current} />
      <FullScreen timeline={timeline.current} />
    </div>
  );
};
