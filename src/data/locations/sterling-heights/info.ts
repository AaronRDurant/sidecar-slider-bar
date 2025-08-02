import { pizzaMenu } from "@/data/sharedMenus";

const sterlingHeights = {
  name: "Sterling Heights",
  address: "44935 Hayes Rd, Sterling Heights, MI 48313",
  phone: "(586) 300-7144",
  hours: "Monday – Sunday: 11 am – 2 am",
  deliveryPartners: [],
  coordinates: {
    lat: 42.62698,
    lng: -82.97089,
  },
  heroImage: "/images/locations/Sterling-Heights-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: pizzaMenu,
};

export default sterlingHeights;
