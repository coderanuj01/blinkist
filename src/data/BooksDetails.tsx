import beingBoss from "../Images/beingBoss.png";
import BeyondEnterprenurship from "../Images/BeyondEnterprenurship.png";
import doesnHurt from "../Images/doesnHurt.png";
import dropshipping from "../Images/dropshipping.png";
import eatBetter from "../Images/eatBetter.png";
import employee from "../Images/employee.png";
import fateFood from "../Images/fateFood.png";
import livesStoic from "../Images/livesStoic.jpg";
import lonelyCentury from "../Images/lonelyCentury.png";
import lovingBussiness from "../Images/lovingBussiness.png";

const BooksDetails = [
  {
    id: 1,
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    timeToRead: 13,
    numberOfReads: 1.9,
    image: lovingBussiness,
    status: {
      isFinished: true,
      isTrending: false,
      justAdded: false,
      isFeatured: true,
    },
  },
  {
    id: 2,
    title: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    timeToRead: 15,
    numberOfReads: 1.9,
    image: employee,
    status: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 3,
    title: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    timeToRead: 13,
    numberOfReads: 1.9,
    image: doesnHurt,
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: true,
    },
  },
  {
    id: 4,
    title: "The Fate of Food",
    author: "Amanda Little",
    timeToRead: 12,
    numberOfReads: 16,
    image: fateFood,
    status: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 5,
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    timeToRead: 13,
    numberOfReads: 13,
    image: livesStoic,
    status: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 6,
    title: "Loving Your Business",
    author: "Debbie King",
    timeToRead: 13,
    numberOfReads: 1.7,
    image: lovingBussiness,
    status: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 7,
    title: "The Lonely Century",
    author: "Noreena Hertz",
    timeToRead: 15,
    numberOfReads: 45,
    image: lonelyCentury,
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: true,
      isFeatured: false,
    },
  },
  {
    id: 8,
    title: "Eat Better,Feel Better",
    author: "Giada De Laurentiis",
    timeToRead: 13,
    numberOfReads: 1.9,
    image: eatBetter,
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: true,
      isFeatured: false,
    },
  },
  {
    id: 9,
    title: "Dropshipping",
    author: "James Moore",
    timeToRead: 12,
    numberOfReads: 23,
    image: dropshipping,
    status: {
      isFinished: false,
      isTrending: false,
      justAdded: true,
      isFeatured: false,
    },
  },
  {
    id: 10,
    title: "Beyond Entrepreneurship",
    author: "Jim Collins & Bill Lazier",
    timeToRead: 13,
    numberOfReads: 1.9,
    image: BeyondEnterprenurship,
    status: {
      isFinished: true,
      isTrending: true,
      justAdded: false,
      isFeatured: true,
    },
  },
  {
    id: 11,
    title: "Being Boss",
    author: "Kathleen Shannon land Emily...",
    timeToRead: 13,
    numberOfReads: 28,
    image: beingBoss,
    status: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
];

export default BooksDetails;
