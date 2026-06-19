import React from "react";
import gif1 from "../../../images/icon/original-66948a0d81d.gif";
import gif2 from "../../../images/icon/0deec720000b2066289b.gif";
import gif3 from "../../../images/icon/b10c3e43e836d32554bf.gif";
import featureIcon1 from "../../../images/icon/feature-icon01.svg";
import featureIcon2 from "../../../images/icon/feature-icon02.svg";
import featureIcon3 from "../../../images/icon/feature-icon03.svg";
import aboutBg from "../../../images/bg/about-bg02.png";
import { Link } from "react-router-dom";

const aboutImg01 =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80";
const aboutImg02 =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80";
const aboutImg03 =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80";
const aboutImg04 =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
const videoPoster =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80";

const aboutColumns = [aboutImg01, aboutImg02, aboutImg03, aboutImg04];

const featureItems = [
  {
    icon: featureIcon1,
    title: "UI/UX Design",
    content:
      "User-centered experiences that increase engagement and conversion.",
  },
  {
    icon: featureIcon2,
    title: "Web Development",
    content:
      "Fast, scalable web apps with Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: featureIcon3,
    title: "SaaS & ERP Solutions",
    content:
      "End-to-end product engineering for SaaS platforms and enterprise systems.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="about pos-rel pb-140">
      <div className="container">
        <div className="about-top-image ul_li_between align-items-start">
          {aboutColumns.slice(0, 2).map((img, colIndex) => (
            <div className="img-hove-effect" key={colIndex}>
              <div className="xb-img">
                {[...Array(4)].map((_, i) => (
                  <Link key={i} to="/project">
                    <img src={img} alt={`Team collaboration ${colIndex + 1}`} loading="lazy" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="xb-video">
            <video loop muted playsInline autoPlay poster={videoPoster}>
              <source src="https://www.pexels.com/download/video/18069701/" />
            </video>
          </div>

          {aboutColumns.slice(2).map((img, colIndex) => (
            <div className="img-hove-effect" key={colIndex + 2}>
              <div className="xb-img">
                {[...Array(4)].map((_, i) => (
                  <Link key={i} to="/project">
                    <img src={img} alt={`Team collaboration ${colIndex + 3}`} loading="lazy" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
          <span className="sub-title mb-10">Who We Are</span>

          <h2 className="title">
            We partner with ambitious teams to
            <span><img src={gif1} alt="animation" /></span>
            design, build, and scale
            <span><img src={gif2} alt="animation" /></span>
            digital products — from SaaS platforms to ERP systems
            <span><img src={gif3} alt="animation" /></span>
          </h2>

          <p className="content">
            We are a full-stack digital software agency specializing in Next.js,
            TypeScript, Node.js, and Express. From beauty e-commerce platforms to
            multi-tenant SaaS and enterprise ERP systems, we deliver scalable
            products backed by PostgreSQL, MongoDB, Prisma, and Mongoose.
          </p>
        </div>

        <div className="row mt-40">
          {featureItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-30" key={index}>
              <div className="xb-feature-item">
                <div className="xb-item--inner xb-border">
                  <span className="xb-item--icon">
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">{item.title}</h2>
                    <p className="xb-item--content">{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-bg">
        <img src={aboutBg} alt="background" />
      </div>
    </section>
  );
};

export default AboutSection;
