import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blogBg from "../../images/bg/blog-bg.png";
import gifShape from "../../images/icon/original-9e54f87f13d.gif";
import icon01 from "../../images/icon/blog-icon01.svg";
import icon02 from "../../images/icon/blog-icon02.svg";

const blogImgFeatured =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1275&h=645&q=80";
const blogImgSaas =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=615&h=405&q=80";
const blogImgBeauty =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=615&h=405&q=80";

const blogPosts = [
  {
    img: blogImgFeatured,
    category: "erp & full-stack",
    date: "March 24, 2025",
    title:
      "Building a modern ERP with Next.js, Prisma, and PostgreSQL — architecture patterns for growing enterprises..",
    large: true,
    delay: "0ms",
  },
  {
    img: blogImgSaas,
    category: "saas development",
    date: "April 27, 2025",
    title:
      "Scaling a multi-tenant SaaS with Node.js, Express, and MongoDB — lessons from production engineering teams..",
    large: false,
    delay: "150ms",
  },
  {
    img: blogImgBeauty,
    category: "e-commerce & beauty",
    date: "March 17, 2025",
    title:
      "Launching a beauty commerce app with Next.js and Tailwind CSS — booking, catalog, and checkout done right..",
    large: false,
    delay: "300ms",
  },
];

const ArrowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
    <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
    <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
    <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
    <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
    <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
    <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
  </svg>
);

const BlogSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".blog.bg_img");
    if (bgEl) {
      bgEl.style.backgroundImage = `url(${blogBg})`;
    }
  }, []);

  return (
    <section className="blog pt-150 bg_img">
      <div className="container">
        <div className="row mt-none-30">
          <div className="col-lg-4 mt-30">
            <div className="sec-title blog-sec-title mb-70">
              <span className="sub-title mb-15">Insights & Resources</span>
              <h2 className="title">
                Full-stack development insights <img src={gifShape} alt="shape" />
              </h2>
            </div>
            <div className="blog-btn">
              <Link className="thm-btn agency-btn" to="/blog">
                <span className="text">view more blog</span>
                <span className="arrow">
                  <span className="arrow-icon">
                    <ArrowIcon />
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="col-lg-8 mt-30">
            <div className="row mt-none-30">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className={`${post.large ? "col-lg-12" : "col-lg-6 col-md-6"} mt-30`}
                >
                  <div
                    className={`xb-blog-item${post.large ? "" : " xb-small-blog-item"} wow fadeInUp`}
                    data-wow-delay={post.delay}
                    data-wow-duration="600ms"
                  >
                    <div className="xb-item--inner img-hove-effect xb-border">
                      <div className="xb-img">
                        {[...Array(4)].map((_, i) => (
                          <Link to="/blog-details" key={i}>
                            <img src={post.img} alt={post.category} />
                          </Link>
                        ))}
                      </div>
                      <div className="xb-item--holder">
                        <ul className="xb-item--meta list-unstyled ul_li">
                          <li>
                            <img src={icon01} alt="category" /> {post.category}
                          </li>
                          <li>
                            <img src={icon02} alt="date" /> {post.date}
                          </li>
                        </ul>
                        <h2 className="xb-item--title">
                          <Link to="/blog-details">{post.title}</Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
