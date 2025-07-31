// /src/data/locations/lansing.ts
const lansing = {
  name: "Lansing",
  address: "500 E Michigan Ave, Suite 100, Lansing, MI 48912",
  phone: "(517) 580-8776",
  hours: "Monday – Sunday: 11 am – 2 am",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-lansing-24398750/?pickup=true",
    },
    {
      name: "Postmates",
      url: "https://postmates.com/store/sidecar-slider-bar-lansing/8KiV2jN2V4SCp-QHMpBWUQ?diningMode=PICKUP",
    },
    {
      name: "UberEats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-lansing/8KiV2jN2V4SCp-QHMpBWUQ?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE2OTAlMjBDaXRydXMlMjBCbHZkJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyOGI1MjgxZjgtZjk4NC1mNWYzLTc0YzMtNWRkMTY2NDE5MTIwJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMnViZXJfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EyOC44MzMwNjU3JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTgxLjg4ODM0ODclN0Q%3D",
    },
  ],
  coordinates: {
    lat: 42.73403,
    lng: -84.54404,
  },
  heroImage: "/images/locations/Lansing-Sidecar-Slider-Bar.jpg",
  galleryImages: [
    "/images/Sidecar-Slider-Bar-menu-items.jpg",
    "/images/Sidecar-Slider-Bar-sliders-menu.jpg",
    "/images/locations/Birmingham-Sidecar-Slider-Bar.jpg",
    "/images/locations/Farmington-Sidecar-Slider-Bar.jpg",
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
