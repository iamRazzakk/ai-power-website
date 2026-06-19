import timg1 from "../images/teams/img-1.jpg";
import timg2 from "../images/teams/img-2.jpg";
import timg3 from "../images/teams/img-3.jpg";
import timg4 from "../images/teams/img-4.jpg";

export interface TeamMember {
  id: string;
  tImg: string;
  name: string;
  slug: string;
  title: string;
}

const Teams: TeamMember[] = [
  {
    id: "1",
    tImg: timg1,
    name: "Jenny Wilson",
    slug: "Jenny-Wilson",
    title: "Senior Software Engineer",
  },
  {
    id: "2",
    tImg: timg2,
    name: "Robert Fox",
    slug: "Robert-Fox",
    title: "UI/UX Designer",
  },
  {
    id: "3",
    tImg: timg3,
    name: "Annette Black",
    slug: "Annette-Black",
    title: "Product Manager",
  },
  {
    id: "4",
    tImg: timg4,
    name: "Jenefer Abram",
    slug: "Jenefer-Abram",
    title: "CEO",
  },
];

export default Teams;
