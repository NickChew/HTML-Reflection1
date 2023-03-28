import { gsap, Elastic, Sine } from "gsap";

const tl = gsap.timeline({ delay: 0.5, repeat: -1, repeatDelay: 2 });

tl.set('svg', { opacity: 1 })
  .set('.leaf', { y: 30, opacity: 0 })
  .set('#mirror', { x: -2 })
  .to('.leaf', { duration: 1, y: 32, opacity: 1, immediateRender: false }, 0)
  .to('.leaf', { duration: 6, x: -20, rotation: 30, ease: Elastic.easeIn.config(1, 0.4), immediateRender: false }, 0)
  .to('.leaf', { duration: 3, y: 120, ease: Sine.easeIn, immediateRender: false }, 3)
  .to('.leaf', { duration: 6, x: -40, rotation: 60, opacity: 0, immediateRender: false });
