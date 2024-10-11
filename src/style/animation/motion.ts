export const motion = {
  spin: {
    start: {},
    end: {
      duration: 1,
      motionPath: {
        path: [
          { x: 10, y: 0 },
          { x: 0, y: 10 },
          { x: -10, y: 0 },
          { x: 0, y: -10 },
        ],
        curviness: 2,
        autoRotate: true,
      },
      ease: "power1.inOut",
    },
  },
  launch: {
    start: {},
    end: { duration: 1.5, x: "+=50", y: "-=50", opacity: 0, ease: "power1.in" },
  },
};
