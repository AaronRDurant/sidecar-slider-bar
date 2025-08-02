import { pizzaMenu } from "@/data/sharedMenus";

const birmingham = {
  name: "Birmingham",
  address: "117 Willits Street, Birmingham, MI 48009",
  phone: "(248) 792-2380",
  hours: "Monday – Sunday: 11 am – 2 am",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-birmingham-825667/",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-birmingham/kSrg0eoiXNeWPdBySfUx0Q?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE2OTAlMjBDaXRydXMlMjBCbHZkJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyOGI1MjgxZjgtZjk4NC1mNWYzLTc0YzMtNWRkMTY2NDE5MTIwJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EyOC44MzMwNjU3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTgxLjg4ODM0ODclN0Q%3D",
    },
  ],
  coordinates: {
    lat: 42.54655,
    lng: -83.21524,
  },
  heroImage: "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: pizzaMenu,
};

export default birmingham;
