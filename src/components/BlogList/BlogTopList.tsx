import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import blog1 from "../../images/blog/img04.jpg";
import blog2 from "../../images/blog/img4.2.jpg";
import blog3 from "../../images/blog/img4.3.jpg";
import blog4 from "../../images/blog/img4.4.jpg";

import shapeLeft from "../../images/shape/prev-shape.png";
import shapeRight from "../../images/shape/next-shape.png";

const blogSlides = [
  {
    img: blog1,
    tag: "# software development",
    title: "How we ship production-ready SaaS platforms on predictable timelines.",
    content:
      "From discovery to deployment, our teams follow proven delivery practices that keep stakeholders aligned and products launch-ready.",
  },
  {
    img: blog2,
    tag: "# mobile apps",
    title: "Why mobile-first architecture matters for modern business products.",
    content:
      "Performance, offline support, and thoughtful UX patterns that help mobile apps retain users and drive real business outcomes.",
  },
  {
    img: blog3,
    tag: "# enterprise systems",
    title: "Building ERP systems that teams actually adopt.",
    content:
      "Custom workflows, clean integrations, and incremental rollouts that make enterprise software practical instead of painful.",
  },
  {
    img: blog4,
    tag: "# product engineering",
    title: "What to look for in a long-term software development partner.",
    content:
      "Transparent communication, maintainable codebases, and teams that care about outcomes—not just ticket counts.",
  },
];

const BlogSlider: React.FC = () => {
  return (
    <section className="blog pt-70">
      <div className="container">
        <div className="blog-slider pos-rel">

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".blog-swiper-btn.swiper-button-next",
              prevEl: ".blog-swiper-btn.swiper-button-prev",
            }}
            className="swiper-container"
          >
            {blogSlides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="blog-slide-item">
                  <div className="xb-item--img">
                    <img src={item.img} alt="Blog" />
                  </div>

                  <div className="xb-item--holder">
                    <a href="#!" className="xb-item--tag xb-border">{item.tag}</a>

                    <h2 className="xb-item--title">
                      <a href="/blog-details">{item.title}</a>
                    </h2>

                    <p className="xb-item--content">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination"></div>

          <div className="blog-item_button">
            <div className="blog-swiper-btn swiper-button-prev">
              <img src={shapeLeft} alt="" />
              <i className="fa-regular fa-angles-left"></i>
            </div>

            <div className="blog-swiper-btn swiper-button-next">
              <img src={shapeRight} alt="" />
              <i className="fa-regular fa-angles-right"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
