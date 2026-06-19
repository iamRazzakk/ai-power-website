import simg1 from "../images/service/image-1.jpg";
import simg2 from "../images/service/image-2.jpg";
import simg3 from "../images/service/image-3.jpg";
import simg4 from "../images/service/image-4.jpg";

import singleImg1 from "../images/service-single/single.jpg";
import singleImg2 from "../images/service-single/single2.jpg";
import singleImg3 from "../images/service-single/single3.jpg";
import singleImg4 from "../images/service-single/single4.jpg";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  simg: string;
  ssImg: string;
}

const Services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    slug: "Web-Development",
    description:
      "Responsive, high-performance web applications built with modern frameworks and clean architecture.",
    simg: simg1,
    ssImg: singleImg1,
  },
  {
    id: "2",
    title: "Mobile App Development",
    slug: "Mobile-App-Development",
    description:
      "Native and cross-platform mobile apps with polished UX and reliable release pipelines.",
    simg: simg2,
    ssImg: singleImg2,
  },
  {
    id: "3",
    title: "SaaS Product Engineering",
    slug: "SaaS-Product-Engineering",
    description:
      "End-to-end SaaS development — from MVP to multi-tenant platforms with billing and analytics.",
    simg: simg3,
    ssImg: singleImg3,
  },
  {
    id: "4",
    title: "ERP & Enterprise Systems",
    slug: "ERP-Enterprise-Systems",
    description:
      "Custom ERP and internal tools that streamline operations and integrate with your existing stack.",
    simg: simg4,
    ssImg: singleImg4,
  },
];

export default Services;
