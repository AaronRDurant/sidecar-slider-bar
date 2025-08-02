import { nonPizzaMenu } from "@/data/sharedMenus";

const ferndale = {
  name: "Ferndale",
  address: "241 W Nine Mile Rd, Ferndale, MI 48220",
  phone: "(248) 607-3261",
  hours: "Monday – Sunday: 11 am – 2 am",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-ferndale-...",
    },
    {
      name: "GrubHub",
      url: "https://www.grubhub.com/restaurant/sidecar-slider-bar-ferndale-...",
    },
    {
      name: "UberEats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-ferndale-...",
    },
  ],
  coordinates: {
    lat: 42.46004,
    lng: -83.13881,
  },
  heroImage: "/images/locations/Ferndale-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: nonPizzaMenu,
};

export default ferndale;
