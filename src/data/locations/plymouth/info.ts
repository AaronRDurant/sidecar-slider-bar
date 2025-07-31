// /src/data/locations/plymouth.ts
const plymouth = {
  name: "Plymouth",
  address: "340 N. Main St., Plymouth, MI 48170",
  phone: "(734) 404-6567",
  hours: "Monday – Sunday: 11 am – 2 am",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-plymouth-...",
    },
    {
      name: "UberEats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-plymouth-...",
    },
  ],
  coordinates: {
    lat: 42.37329,
    lng: -83.47083,
  },
  heroImage: "/images/locations/Plymouth-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-pizza-street-view.jpg",
    "/images/moto-sidecar-placeholder.jpg",
    "/images/moto-sidecar-placeholder.jpg",
    "/images/moto-sidecar-placeholder.jpg",
  ],
  menu: [
    {
      category: "Best of the Rest Sliders",
      items: [
        {
          name: "Fried Chicken",
          price: "$5.99",
          description: "Hot sauce, maple syrup, lettuce, pickle",
        },
        {
          name: "Caesar",
          price: "$5.99",
          description:
            "Fried chicken, romaine, tomato, bacon, Parmesan, Caesar dressing",
        },
        {
          name: "Ahi Tuna",
          price: "$7.99",
          description: "Arugula, avocado, sriracha, wasabi-cucumber ranch",
        },
        {
          name: "Portabella",
          price: "$5.75",
          description: "Fried goat cheese, tomato, arugula, balsamic reduction",
        },
        {
          name: "The Dirty Bird",
          price: "$5.99",
          description: "Fried chicken, lettuce, pickle, herbed mayo",
        },
        {
          name: "Fried Perch",
          price: "$5.99",
          description: "Lettuce, tomato, pickle, chipotle aioli",
        },
        {
          name: "Pulled Pork",
          price: "$5.99",
          description: "Bourbon BBQ sauce, creamy slaw",
        },
        {
          name: "The Impossible",
          price: "$5.99",
          description:
            "Impossible veggie patty, lettuce, tomato, caramelized onion, ketchup, mustard",
        },
      ],
    },
  ],
};

export default plymouth;
