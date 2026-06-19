// ===============================
// Blog Data
// ===============================

import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";
import blogImg4 from "../images/blog/img-4.jpg";

import blogSingleImg1 from "../images/blog/img-1.jpg";
import blogSingleImg2 from "../images/blog/img-2.jpg";
import blogSingleImg3 from "../images/blog/img-3.jpg";
import blogSingleImg4 from "../images/blog/img-4.jpg";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  screens: string;
  description: string;
  author: string;
  create_at: string;
  blogSingleImg: string;
  comment: string;
  blClass: string;
  animation: string;
  videoBtn?: string;
}

const blogs: Blog[] = [
  {
    id: "1",
    title: "Building a Modern ERP with Next.js and PostgreSQL",
    slug: "Building-a-Modern-ERP-with-Nextjs-and-PostgreSQL",
    screens: blogImg1,
    description:
      "Architecture patterns and lessons learned from shipping enterprise resource planning systems at scale.",
    author: "Sarah Chen",
    create_at: "24 Mar 2025",
    blogSingleImg: blogSingleImg1,
    comment: "35",
    blClass: "format-standard-image",
    animation: "1200",
  },
  {
    id: "2",
    title: "Scaling a Multi-Tenant SaaS Platform",
    slug: "Scaling-a-Multi-Tenant-SaaS-Platform",
    screens: blogImg2,
    description:
      "How we design tenant isolation, billing, and observability for production SaaS products.",
    author: "James Okonkwo",
    create_at: "27 Apr 2025",
    blogSingleImg: blogSingleImg2,
    comment: "80",
    blClass: "format-standard-image",
    animation: "1400",
  },
  {
    id: "3",
    title: "Mobile App Development Best Practices in 2025",
    slug: "Mobile-App-Development-Best-Practices-in-2025",
    screens: blogImg3,
    description:
      "Performance, offline support, and release workflows that keep mobile products reliable.",
    author: "Priya Ramirez",
    create_at: "17 Mar 2025",
    blogSingleImg: blogSingleImg3,
    comment: "95",
    blClass: "format-video",
    videoBtn: "video-btn",
    animation: "1600",
  },
  {
    id: "4",
    title: "Choosing the Right Tech Stack for Your Product",
    slug: "Choosing-the-Right-Tech-Stack-for-Your-Product",
    screens: blogImg4,
    description:
      "A practical framework for evaluating frameworks, databases, and cloud platforms before you build.",
    author: "Miguel Torres",
    create_at: "12 Feb 2025",
    blogSingleImg: blogSingleImg4,
    comment: "62",
    blClass: "format-video",
    animation: "1200",
  },
];

export default blogs;
