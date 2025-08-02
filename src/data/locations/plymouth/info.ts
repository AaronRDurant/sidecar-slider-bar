import { nonPizzaMenu } from "@/data/sharedMenus";

const plymouth = {
  name: "Plymouth",
  address: "340 N. Main St., Plymouth, MI 48170",
  phone: "(734) 404-6567",
  hours: "Monday – Sunday: 11 am – 2 am",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-plymouth-26038815/",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/sidecar-plymouth/Jdx9o_XPSmOt8a7NDZb1MA",
    },
  ],
  coordinates: {
    lat: 42.37329,
    lng: -83.47083,
  },
  heroImage: "/images/locations/Plymouth-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: nonPizzaMenu,
};

export default plymouth;
