import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import projectBg from "../../images/bg/project-bg.png";
import gifRound from "../../images/icon/b10c3e43e836d32554bf.gif";
import nextjsIcon from "../../images/icon/tech-nextjs.svg";
import typescriptIcon from "../../images/icon/tech-typescript.svg";
import tailwindIcon from "../../images/icon/tech-tailwind.svg";
import nodejsIcon from "../../images/icon/tech-nodejs.svg";
import expressIcon from "../../images/icon/tech-express.svg";
import prismaIcon from "../../images/icon/tech-prisma.svg";
import mongodbIcon from "../../images/icon/tech-mongodb.svg";
import postgresqlIcon from "../../images/icon/tech-postgresql.svg";
import mongooseIcon from "../../images/icon/tech-mongoose.svg";

type TechKey =
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "nodejs"
  | "express"
  | "prisma"
  | "mongodb"
  | "postgresql"
  | "mongoose";

const TECH_ICONS: Record<TechKey, { name: string; icon: string }> = {
  nextjs: { name: "Next.js", icon: nextjsIcon },
  typescript: { name: "TypeScript", icon: typescriptIcon },
  tailwind: { name: "Tailwind CSS", icon: tailwindIcon },
  nodejs: { name: "Node.js", icon: nodejsIcon },
  express: { name: "Express", icon: expressIcon },
  prisma: { name: "Prisma", icon: prismaIcon },
  mongodb: { name: "MongoDB", icon: mongodbIcon },
  postgresql: { name: "PostgreSQL", icon: postgresqlIcon },
  mongoose: { name: "Mongoose", icon: mongooseIcon },
};

const projectImgErp =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80";
const projectImgSaas =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";
const projectImgBeauty =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80";

const ProjectSection: React.FC = () => {
  useEffect(() => {
    // ✅ Set dynamic background image
    const bgElement = document.querySelector<HTMLElement>(".project.bg_img");
    if (bgElement) {
      bgElement.style.backgroundImage = `url(${projectBg})`;
    }

    // ✅ Scroll activation logic
    const items = document.querySelectorAll<HTMLElement>(".xb-project-item");
    const paginations = document.querySelectorAll<HTMLElement>(".xb-project-pagination li");

    if (!items.length || !paginations.length) return;

    items.forEach((item) => {
      item.style.transition = "opacity 0.6s ease";
      item.style.opacity = "1";
    });

    const updateActive = () => {
      let indexToActivate = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          indexToActivate = index;
        }
      });

      paginations.forEach((el) => el.classList.remove("active"));
      if (paginations[indexToActivate]) {
        paginations[indexToActivate].classList.add("active");
      }

      items.forEach((item, i) => {
        if (i === indexToActivate) {
          item.style.opacity = "1";
        } else if (i < indexToActivate) {
          item.style.opacity = "0.3";
        } else {
          item.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => {
      window.removeEventListener("scroll", updateActive);
    };
  }, []);

  return (
    <section className="project bg_img pt-135 pb-150">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">Case Studies</span>
          <h2 className="title">
            <span className="round-img">
              <img src={gifRound} alt="animation" />
            </span>{" "}
            Full-stack products built with our core technology stack
          </h2>
          <div className="xb-heading-btn d-inline">
            <Link className="thm-btn agency-btn" to="/project">
              <span className="text">view more projects</span>
              <span className="arrow">
                <span className="arrow-icon">
                  {/* Double SVG arrow */}
                  {[...Array(2)].map((_, i) => (
                    <svg
                      key={i}
                      width="28" 
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5.06592"
                        y="19.9785"
                        width="20.5712"
                        height="2.61221"
                        transform="rotate(-40.2798 5.06592 19.9785)"
                        fill="white"
                      />
                      <rect
                        x="7.97095"
                        y="7.24463"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 7.97095 7.24463)"
                        fill="white"
                      />
                      <rect
                        x="11.6523"
                        y="7.54834"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 11.6523 7.54834)"
                        fill="white"
                      />
                      <rect
                        x="15.334"
                        y="7.85205"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 15.334 7.85205)"
                        fill="white"
                      />
                      <rect
                        x="18.7119"
                        y="11.8374"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 18.7119 11.8374)"
                        fill="white"
                      />
                      <rect
                        x="18.4084"
                        y="15.52"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 18.4084 15.52)"
                        fill="white"
                      />
                      <rect
                        x="18.104"
                        y="19.2012"
                        width="2.61221"
                        height="2.61221"
                        transform="rotate(-40.2798 18.104 19.2012)"
                        fill="white"
                      />
                    </svg>
                  ))}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">
          {/* Pagination */}
          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              <li>1</li>
              <li className="active">2</li>
              <li>3</li>
            </ul>
          </div>

          {/* Project items */}
          <div className="xb-project-inner">
            {[
              {
                img: projectImgErp,
                title: "NexusFlow ERP Platform",
                desc: "A full-stack ERP built with Next.js, TypeScript, and Tailwind CSS — unifying inventory, procurement, HR, and financial reporting in one dashboard. Node.js and Express power the API layer, while PostgreSQL and Prisma deliver reliable, type-safe data modeling across departments.",
                industry: "ERP Systems",
                country: "United Kingdom",
                techs: ["nextjs", "typescript", "tailwind", "nodejs", "express", "postgresql", "prisma"] as TechKey[],
              },
              {
                img: projectImgSaas,
                title: "ScaleStack SaaS Hub",
                desc: "A multi-tenant SaaS platform with subscription billing, role-based access, and real-time analytics. The Next.js frontend uses custom CSS and Tailwind for a fast admin experience; Node.js, Express, and MongoDB with Mongoose handle flexible user data at scale.",
                industry: "SaaS Platforms",
                country: "United States",
                techs: ["nextjs", "tailwind", "nodejs", "express", "mongodb", "mongoose"] as TechKey[],
              },
              {
                img: projectImgBeauty,
                title: "GlowCart Beauty Commerce",
                desc: "A beauty services and e-commerce platform with online booking, product catalog, and secure checkout. Built with Next.js and TypeScript on the frontend; Express and Prisma manage orders, inventory, and customer profiles on PostgreSQL.",
                industry: "E-Commerce & Beauty",
                country: "United Arab Emirates",
                techs: ["nextjs", "typescript", "express", "prisma", "postgresql"] as TechKey[],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{project.title}</h2>
                    <p className="xb-item--content">{project.desc}</p>
                    <ul className="xb-item--list ul_li">
                      <li>
                        Industry: <span>{project.industry}</span>
                      </li>
                      <li>
                        Country: <span>{project.country}</span>
                      </li>
                    </ul>
                    <div className="xb-item--technologie ul_li">
                      <span>Core Technologies:</span>
                      <ul className="list-unstyled ul_li">
                        {project.techs.map((techKey) => (
                          <li key={techKey}>
                            <img
                              src={TECH_ICONS[techKey].icon}
                              alt={TECH_ICONS[techKey].name}
                              title={TECH_ICONS[techKey].name}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="xb-item---btn mt-70">
                      <Link className="thm-btn agency-btn" to="/project-details">
                        <span className="text">read more</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            {[...Array(2)].map((_, i) => (
                              <svg
                                key={i}
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="5.06592"
                                  y="19.9785"
                                  width="20.5712"
                                  height="2.61221"
                                  transform="rotate(-40.2798 5.06592 19.9785)"
                                  fill="white"
                                />
                                <rect
                                  x="7.97095"
                                  y="7.24463"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 7.97095 7.24463)"
                                  fill="white"
                                />
                                <rect
                                  x="11.6523"
                                  y="7.54834"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 11.6523 7.54834)"
                                  fill="white"
                                />
                                <rect
                                  x="15.334"
                                  y="7.85205"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 15.334 7.85205)"
                                  fill="white"
                                />
                                <rect
                                  x="18.7119"
                                  y="11.8374"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 18.7119 11.8374)"
                                  fill="white"
                                />
                                <rect
                                  x="18.4084"
                                  y="15.52"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 18.4084 15.52)"
                                  fill="white"
                                />
                                <rect
                                  x="18.104"
                                  y="19.2012"
                                  width="2.61221"
                                  height="2.61221"
                                  transform="rotate(-40.2798 18.104 19.2012)"
                                  fill="white"
                                />
                              </svg>
                            ))}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
