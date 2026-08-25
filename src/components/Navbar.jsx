import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        toggleActions: "play none reverse none",
      },
    });

    navTween.fromTo(
      "nav",
      { background: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        duration: 0.4,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav>
      <div>
        <a href="home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
