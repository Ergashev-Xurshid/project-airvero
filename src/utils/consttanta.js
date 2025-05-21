// menu links
export const menuLinks = [
  { id: "/", titleKey: "nav-links.home" },
  { id: "about", titleKey: "nav-links.about" },
  { id: "types", titleKey: "nav-links.types" },
  { id: "contact", titleKey: "nav-links.contact" },
];


// carusel img 

import istanbul from "../assets/istanbul.jpg";
import sharm from "../assets/sharm.jpg";
import tailand from "../assets/tailand.jpg";
import argentina from "../assets/argantina.jpg";
import dubai from "../assets/dubai.jpg";
import saudi from "../assets/saudi.jpg";


export const caruselItems = [
  {
    name: "popular-cards.Istanbul",
    image: istanbul,
    booked: 120
  },
  {
    name: "popular-cards.Sharm-El-Sheykh",
    image: sharm,
    booked: 96
  },
  {
    name: "popular-cards.Thailand",
    image: tailand,
    booked: 55
  },
  {
    name: "popular-cards.Argentina",
    image: argentina,
    booked: 66
  },
  {
    name: "popular-cards.Dubai",
    image: dubai,
    booked: 76
  },
  {
    name: "popular-cards.Saudi",
    image: saudi,
    booked: 76
  },
];

// the goal item
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";

export const goalItems = [
  {
    id: 1,
    image: img1,
    title: "goal-card-1.title-1",
    category: "goal-card-1.sub-title-1",
    description:"goal-card-1.text-1"
  },
  {
    id: 2,
    image: img2,
    title: "goal-card-2.title-2",
    category: "goal-card-2.sub-title-2",
    description:"goal-card-2.text-2"
  },
  {
    id: 3,
    image: img3,
    title: "goal-card-3.title-3",
    category: "goal-card-3.sub-title-3",
    description:"goal-card-3.text-3"
  },
  {
    id: 4,
    image: img4,
    title: "goal-card-4.title-4",
    category: "goal-card-4.sub-title-4",
    description:"goal-card-4.text-4"
  },
  {
    id: 5,
    image: img5,
    title: "goal-card-5.title-5",
    category: "goal-card-5.sub-title-5",
    description:"goal-card-5.text-5"
  },
  {
    id: 6,
    image: img6,
    title: "goal-card-6.title-6",
    category: "goal-card-6.sub-title-6",
    description:"goal-card-6.text-6"
  },
];


// Discover card

import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.jpg";

export const discoverCard = [
  {
    id: 1,
    image: card1,
    title: "discover-card-1.title",
    subTitle: "discover-card-1.sub-title",
    description:"discover-card-1.text"
  },
  {
    id: 2,
    image: card2,
    title: "discover-card-2.title",
    subTitle: "discover-card-2.sub-title",
    description:"discover-card-2.text"
  },
  {
    id: 3,
    image: card3,
    title: "discover-card-2.title",
    subTitle: "discover-card-2.sub-title",
    description:"discover-card-2.text"
  },
]

// services card 

import card_1 from "../assets/service_icon_1.png"
import card_2 from "../assets/service_icon_2.png"
import card_3 from "../assets/service_icon_3.png"

export const servicesCard = [
  {
    id: 1,
    image: card_1,
    title: "services-card-1.title",
    description: "services-card-1.text"
  },
  {
    id: 2,
    image: card_2,    
    title: "services-card-2.title",
    description: "services-card-2.text"
  },
  {
    id: 3,
    image: card_3,
    title: "services-card-3.title",
    description: "services-card-3.text"},
]

// plan li 
export const planLi = [
  {
    id: 1,
    title: "plan-item-1.title",
    description: "plan-item-1.text"
  },
  {
    id: 2,
    title: "plan-item-2.title",
    description: "plan-item-2.text"
  },
  {
    id: 3,
    title: "plan-item-3.title",
    description: "plan-item-3.text"}
];

// offer cards 
export const offerCard = [
  {
    id: 1,
    type: "offer-card-1.type",
    title: "offer-card-1.title",
    subTitle:"offer-card-1.sub-title",
    links: [
      "offer-card-1.offer-links.link-1",
      "offer-card-1.offer-links.link-2",
      "offer-card-1.offer-links.link-3",
      "offer-card-1.offer-links.link-4",
      "offer-card-1.offer-links.link-5",
    ]
  },
  {
    id: 2,
    type: "offer-card-2.type",
    title: "offer-card-2.title",
    subTitle:"offer-card-2.sub-title",
    links: [
      "offer-card-2.offer-links.link-1",
      "offer-card-2.offer-links.link-2",
      "offer-card-2.offer-links.link-3",
      "offer-card-2.offer-links.link-4",
      "offer-card-2.offer-links.link-5",
    ]
  },
  {
    id: 3,
    type: "offer-card-3.type",
    title: "offer-card-3.title",
    subTitle:"offer-card-3.sub-title",
    links: [
      "offer-card-3.offer-links.link-1",
      "offer-card-3.offer-links.link-2",
      "offer-card-3.offer-links.link-3",
      "offer-card-3.offer-links.link-4",
    ]
  }
]