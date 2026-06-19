import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import aboutBg from "../../images/bg/about-bg.png";

// Animated GIFs
import gif1 from "../../images/icon/original-66948a0d81d.gif";
import gif2 from "../../images/icon/0deec720000b2066289b.gif";
import gif3 from "../../images/icon/b10c3e43e836d32554bf.gif";

import { Link } from "react-router-dom";

const aboutImageSources = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
];

const AboutSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-about-img-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  const aboutImages = [...aboutImageSources, ...aboutImageSources];

  return (
    <section className="about pt-140">
      <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We Are</span>
          <h2 className="title">
            We partner with ambitious teams to
            <span>
              <img src={gif1} alt="animation" />
            </span>{" "}
            design, build, and scale
            <span>
              <img src={gif2} alt="animation" />
            </span>
            digital products — from SaaS platforms to enterprise systems{" "}
            <span>
              <img src={gif3} alt="animation" />
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ One single marquee with all 3 images */}
      <div className="xb-about-img-wrap bg_img wow">
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className="xb-about-img-item img-hove-effect">
              <div className="xb-img">
                <Link to="/service-details">
                  <img src={img} alt={`Team collaboration ${idx + 1}`} loading="lazy" />
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutSection;
