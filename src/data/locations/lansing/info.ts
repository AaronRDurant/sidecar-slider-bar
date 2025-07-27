// /src/data/locations/lansing.ts
const lansing = {
  name: "Lansing",
  address: "500 E Michigan Ave, Suite 100, Lansing, MI 48912",
  phone: "(517) 580-8776",
  hours: "Monday – Sunday: 11:00 AM – 2:00 AM",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-lansing-...",
    },
    {
      name: "Postmates",
      url: "https://www.postmates.com/store/sidecar-slider-bar-lansing-...",
    },
    {
      name: "UberEats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-lansing-...",
    },
  ],
  coordinates: {
    lat: 42.73403,
    lng: -84.54404,
  },
  heroImage: "/images/moto-sidecar-placeholder.jpg",
  galleryImages: [
    "/images/moto-sidecar-placeholder.jpg",
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
          description: "Greens, avocado, sriracha, wasabi-cucumber ranch",
        },
        {
          name: "Portabella",
          price: "$5.99",
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
            "Impossible veggie patty, lettuce, tomato, caramelized onion, ketchup and mustard",
        },
      ],
    },
  ],
};

export default lansing;
