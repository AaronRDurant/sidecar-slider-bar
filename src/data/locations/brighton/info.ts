import { nonPizzaMenu } from "@/data/sharedMenus";

const brighton = {
  name: "Brighton",
  address: "120 W. Main St., Brighton, MI 48116",
  phone: "(810) 588-4855",
  hours:
    "Monday – Thursday: 11 am – 11 pm\nFriday – Saturday: 11 am – 12 pm\nSunday: 11 am – 10 pm",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-brighton-26146773/",
    },
  ],
  coordinates: {
    lat: 42.52919,
    lng: -83.78098,
  },
  heroImage: "/images/locations/Brighton-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: nonPizzaMenu,
};

export default brighton;
