import { nonPizzaMenu } from "@/data/sharedMenus";

const farmington = {
  name: "Farmington",
  address: "32720 Grand River Avenue, Farmington, MI 48336",
  phone: "(248) 536-2907",
  hours:
    "Monday – Thursday: 11 am – 11 pm\nFriday – Saturday: 11 am – 12 am\nSunday: 11 am – 10 pm",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-farmington-837883/",
    },
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-farmington-hills/YoRbBzIrV7G41T83PgpI1w?diningMode=PICKUP&mod=storeDeliveryTime&modctx=%257B%2522entryPoint%2522%253A%2522store-auto-surface%2522%252C%2522encodedStoreUuid%2522%253A%2522YoRbBzIrV7G41T83PgpI1w%2522%257D&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE2OTAlMjBDaXRydXMlMjBCbHZkJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyOGI1MjgxZjgtZjk4NC1mNWYzLTc0YzMtNWRkMTY2NDE5MTIwJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EyOC44MzMwNjU3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTgxLjg4ODM0ODclN0Q%3D&ps=1",
    },
  ],
  coordinates: {
    lat: 42.46176,
    lng: -83.37688,
  },
  heroImage: "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
  ],
  menu: nonPizzaMenu,
};

export default farmington;
