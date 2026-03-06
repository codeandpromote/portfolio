import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Project Alpha",
    category: "Web App",
    tools: "React, Next.js, TailWind",
    image: "/images/webapp.webp",
  },
  {
    title: "Project Beta",
    category: "E-Commerce",
    tools: "React, Node.js, Express, MongoDB",
    image: "/images/ecommerce.webp",
  },
  {
    title: "Project Gamma",
    category: "Landing Page",
    tools: "HTML, CSS, GSAP",
    image: "/images/landing.webp",
  },
  {
    title: "Project Delta",
    category: "Portfolio",
    tools: "React, Three.js, WebGL",
    image: "/images/placeholder.webp",
  },
  {
    title: "Project Epsilon",
    category: "Dashboard",
    tools: "Vue.js, Firebase, Chart.js",
    image: "/images/dashboard.webp",
  },
  {
    title: "Project Zeta",
    category: "Mobile App",
    tools: "React Native, Redux, Node.js",
    image: "/images/app.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return 0;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
