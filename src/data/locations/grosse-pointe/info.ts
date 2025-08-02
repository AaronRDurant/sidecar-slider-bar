import { pizzaMenu } from "@/data/sharedMenus";

const grossePointe = {
  name: "Grosse Pointe",
  address: "17051 Kercheval Ave, Grosse Pointe, MI 48230",
  phone: "(313) 332-5236",
  hours:
    "Monday – Thursday: 11 am – 10 pm\nFriday – Saturday: 11 am – 12 am\nSunday: 11 am – 10 pm",
  deliveryPartners: [
    {
      name: "Grubhub",
      url: "https://www.grubhub.com/restaurant/sidecar-slider-bar--grosse-pointe-llc-17051-kercheval-ave-grosse-pointe/7604712",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-gp/fnsqYUy8Wi24y_h05gxjUA",
    },
  ],
  coordinates: {
    lat: 42.38695,
    lng: -82.91777,
  },
  heroImage: "/images/locations/Grosse-Pointe-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: pizzaMenu,
};

export default grossePointe;
