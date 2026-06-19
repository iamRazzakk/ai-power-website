import React from "react";
// ICONS
import ItemDetailsContent from "./ItemDetailsContent";
import CommentsArea from "./CommentsArea";
import CommentForm from "./CommentForm";
import NewsletterBox from "./NewsletterBox";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

// IMAGE IMPORTS
import blog08 from "../../images/blog/img08.jpg";
import blog09 from "../../images/blog/img09.jpg";
import blog10 from "../../images/blog/img10.jpg";
import blog11 from "../../images/blog/img11.jpg";

import avatar1 from "../../images/avatar/author-img.png";
import RelatedBlog from "./RelatedBlog";
import { Link } from "react-router-dom";



const BlogDetailsSection: React.FC = () => {
  return (
    <section className="blog_details_section pt-70">
      <div className="container">

        {/* MAIN IMAGE */}
        <div className="single-item-image mb-70">
          <img src={blog08} alt="Blog" />
        </div>

        {/* HEADER META */}
        <ItemDetailsContent />

        {/* CONTENT ROW */}
        <div className="row mt-none-30 g-0 align-items-start">
          <div className="col-lg-8 mt-30">

            <div className="blog_details_content">

              {/* AUDIO BUTTON */}
              <div className="post_audio">
                <button className="audio_play_btn xb-border" type="button">
                  <i className="fas fa-play"></i>
                  <span className="time">6:24</span>
                  <span>Listen to this article!</span>
                </button>
              </div>

              {/* MAIN HEADING */}
              <h3 className="item_details_info_heading mb-35">
                Software insights that turn complex requirements into <br /> clear, shippable products.
              </h3>

              <div className="row mb-35 mt-none-30">
                <div className="col-md-6 col-sm-6 mt-30">
                  <div className="single-item-image">
                    <img src={blog09} alt="Blog" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 mt-30">
                  <div className="single-item-image">
                    <img src={blog10} alt="Blog" />
                  </div>
                </div>
              </div>

              <p>
                At Zentigo Solution, we specialize in building custom software that helps businesses operate smarter, faster, and more efficiently. In today's fast-paced digital environment, companies are constantly challenged to replace manual workflows, reduce operational costs, and ship products that scale. Our engineering teams tackle these challenges with disciplined discovery, clean architecture, and iterative delivery. From web and mobile applications to SaaS platforms and ERP systems, we build software that teams actually adopt and rely on every day.
              </p>

              <p className="mt-35">
                We work closely with businesses to understand their unique requirements and develop tailored systems that solve immediate operational issues while supporting long-term growth. Whether it's modernizing legacy tools, launching a new product, or integrating with existing platforms, our approach ensures every release brings measurable impact. By combining deep technical expertise with transparent communication, we become a long-term technology partner—not just a vendor.
              </p>

              {/* VIDEO EMBED */}
              <div className="blog-details-video mt-75">
                <iframe
                  width="890"
                  height="440"
                  src="https://www.youtube.com/embed/HISRUrJsD08?si=_cI2X3hO3nluIWHV"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="item_details_info_heading mb-20">
                Replacing manual workflows with reliable software.
              </h3>

              <p className="mb-40">
                Custom software replaces repetitive manual processes with systems that are faster, more accurate, and easier to maintain. Instead of juggling spreadsheets, disconnected tools, and ad-hoc scripts, teams get purpose-built applications with clear workflows, role-based access, and integrations that match how they actually work. The result is less friction, fewer errors, and more time spent on work that moves the business forward.
              </p>

              {/* IMAGE + LIST */}
              <div className="row mb-45 align-items-center mt-none-30">
                <div className="col-md-6 mt-30">
                  <img src={blog11} alt="Blog" className="single-item-image" />
                </div>

                <div className="col-md-6 mt-30">
                  <ul className="iconlist_block">
                    <li><span className="iconlist_text">Automated Task Detection.</span></li>
                    <li><span className="iconlist_text">24/7 Autonomous Execution.</span></li>
                    <li><span className="iconlist_text">Cross-Platform Integration.</span></li>
                    <li><span className="iconlist_text">Parallel Task Processing.</span></li>
                    <li><span className="iconlist_text">Instant Trigger Automation.</span></li>
                    <li><span className="iconlist_text">Low-Code Setup.</span></li>
                  </ul>
                </div>
              </div>

              <h3 className="item_details_info_heading mb-25">3 reasons automation transforms tasks.</h3>

              <ul className="iconlist_block numlist_block list-unstyled">
                <li><span className="iconlist_text">1. Streamlining Routine Workflows.</span></li>
                <li><span className="iconlist_text">2. Reducing Errors and Increasing Accuracy..</span></li>
                <li><span className="iconlist_text">3. Enhancing Employee Productivity and Focus.</span></li>
              </ul>

              {/* AUTHOR BLOCK */}
              <div className="post-block-wrap mb-50">
                <div className="postabmin_block xb-border ul_li">

                  <div className="admin_image">
                    <img src={avatar1} alt="Author" />
                  </div>

                  <div className="admin_content">
                    <h4 className="admin_name">Aiden Brooks</h4>
                    <span className="admin_designation">Content Manager</span>
                    <p>A content editor plays a pivotal role in shaping and refining digital content...</p>

                    <ul className="social_icons_blocks list-unstyled ul_li">
                      <li><Link to="/blog-details"><i className="fab fa-facebook-f"></i></Link></li>
                      <li><Link to="/blog-details"><i className="fab fa-instagram"></i></Link></li>
                      <li><Link to="/blog-details"><i className="fab fa-linkedin-in"></i></Link></li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* TAGS + SOCIAL */}
              <div className="row mt-none-30">
                <div className="col-md-6 mt-30">
                  <ul className="tags_block list-unstyled">
                    <li><Link className="xb-border" to="/blog-details">AI Solutions</Link></li>
                    <li><Link className="xb-border" to="/blog-details">Data Science</Link></li>
                    <li><Link className="xb-border" to="/blog-details">SaaS</Link></li>
                  </ul>
                </div>

                <div className="col-md-6 mt-30">
                  <ul className="social_icons_block list-unstyled ul_li justify-content-md-end">
                    <li><Link className="xb-border" to="/blog-details"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link className="xb-border" to="/blog-details"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link className="xb-border" to="/blog-details"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link className="xb-border" to="/blog-details"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link className="xb-border" to="/blog-details"><i className="fas fa-share-alt"></i></Link></li>
                  </ul>
                </div>
              </div>

              {/* COMMENTS AREA */}
              <CommentsArea />

              {/* COMMENT FORM */}
              <CommentForm />

              {/* SUBSCRIBE BOX */}
              <NewsletterBox />
            </div>
          </div>
          <BlogSidebar />
        </div>

        <RelatedBlog/>

      </div>
    </section>
  );
};

export default BlogDetailsSection;
