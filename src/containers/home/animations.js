import { gsap, Power3, Power0 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollBannerAnimation = function () {
    gsap.fromTo(
      ".banner",
      {
        scale: 1,
        y: 0,
      },
      {
        scale: 1.5,
        y: -10,
        scrollTrigger: {
          trigger: ".body",
          // markers: true,
          scrub: true,
        },
      }
    );
  
    gsap.to(".body", {
      clipPath: "polygon(0% 0%, 50% -1%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".body",
        scrub: true,
      },
    });
  
    gsap.to(".body-stroke", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 50% -10%, 0% 10%)",
      scrollTrigger: {
        trigger: ".body",
        scrub: true,
        start: "top 90%",
      },
    });
  };
  
export const introAnimation = () => {
    gsap.fromTo(
      ".overlay",
      {
        yPercent: 0,
        clipPath: "polygon(0% 0%, 50% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 50% 20%, 100% 0%, 100% 100%, 0% 100%)",
        yPercent: 100,
        duration: 0.8,
        ease: Power3.easeIn,
        onComplete: () => {
          // @ts-ignore
          document.querySelector(".overlay").style.display = "none";
        },
      }
    );
  
    gsap.fromTo(
      "#headline",
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, duration: 0.3, delay: 0.9, ease: Power0.easeInOut }
    );
     
   gsap.fromTo(
     ".cta-btn",
     { autoAlpha: 0, y: -20 },
     { autoAlpha: 1, y: 0, duration: 0.3, delay: 1.3, ease: Power0.easeInOut }
   );

   gsap.fromTo(
    "#timer",
    { autoAlpha: 0, y: -20 },
    { autoAlpha: 1, y: 0, duration: 0.3, delay: 1.2, ease: Power0.easeInOut }
   );
   
   gsap.fromTo(
    "#address",
    { autoAlpha: 0, y: -20 },
    { autoAlpha: 1, y: 0, duration: 0.2, delay: 1.4, ease: Power0.easeInOut }
  );

   gsap.fromTo(
     "#navbar",
     {
       clipPath: "polygon(0% 0%, 100% 0%, 100% 1%, 0% 1%)",
      },
      {
        //  transform: "translateY(-100%)",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
       duration: 1,
       delay: 0.9,
       ease: Power3.easeOut
     }
   )
};
  
export const galleryAnimation = () => {
  gsap.fromTo("#slider", {translateX: "0%"}, {
    translateX: "-200%",
    duration: 9000,
    repeat: -1,
    onComplete: () => {
      galleryAnimation();
    }
  })
}
  