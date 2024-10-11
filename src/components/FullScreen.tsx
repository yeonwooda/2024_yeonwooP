import React, { useEffect, useRef } from "react";

type FullScreenProps = {
  timeline: gsap.core.Timeline;
};

gsap.registerPlugin(TextPlugin);

const FullScreen = ({ timeline }: FullScreenProps) => {
  const test = useRef(null);
  useEffect(() => {
    timeline.fromTo(test.current, {}, { text: "굿걸", duration: 0.5 });
  }, [timeline]);

  return (
    <div
      ref={test}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
    ></div>
  );
};

export default FullScreen;
