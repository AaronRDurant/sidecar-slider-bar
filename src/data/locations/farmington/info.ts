// /src/data/locations/farmington.ts
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
  menu: [
    {
      category: "Shareables",
      items: [
        {
          name: "Coconut Shrimp",
          price: "$15.99",
          description: "Spicy mango sauce, bang bang sauce",
        },
        {
          name: "Pretzel Bites",
          price: "$12.99",
          description: "Cajun seasoning, melted cheese",
        },
        {
          name: "Taquitos",
          price: "$12.99",
          description: "Chicken, green hatch chile, cheese",
        },
        {
          name: "Chips and Salsa",
          price: "$7.99",
          description: "Housemade salsa, tortilla chips | add queso $4.99",
        },
        {
          name: "Pulled Pork Nachos",
          price: "$16.99",
          description:
            "Pulled pork, jalapeño, pickled red onion, melted cheese, sour cream, pico de gallo",
        },
        {
          name: "Chicken Tenders (6 pc)",
          price: "$13.99",
          description:
            "House breaded, choice of ranch, bbq, buffalo or honey mustard",
        },
        {
          name: "Chicken Tenders (12 pc)",
          price: "$22.99",
          description:
            "House breaded, choice of ranch, bbq, buffalo or honey mustard",
        },
        {
          name: "Smoked Wings",
          price: "$14.99",
          description: "Dry rub, house sauces",
        },
        {
          name: "Loaded Tots",
          price: "$14.99",
          description:
            "Chili, bacon, cheese, sour cream, green onion, jalapeños",
        },
        {
          name: "Brussels Sprouts",
          price: "$13.99",
          description: "Balsamic reduction, bleu cheese, bacon",
        },
        {
          name: "Cheese Curds",
          price: "$12.99",
          description: "Served with ranch, chipotle aioli",
        },
        {
          name: "Truffle Fries",
          price: "$11.99",
          description: "Parmesan, garlic aioli",
        },
        {
          name: "Pierogis",
          price: "$12.99",
          description:
            "Cheese-filled, caramelized onions, bacon, spicy sour cream",
        },
        {
          name: "Traditional Wings (6 pc)",
          price: "$13.99",
          description:
            "Choice of buffalo, bbq, spicy mango, garlic parmesan, fire, korean, or nashville hot",
        },
        {
          name: "Traditional Wings (12 pc)",
          price: "$22.99",
          description:
            "Choice of buffalo, bbq, spicy mango, garlic parmesan, fire, korean, or nashville hot",
        },
      ],
    },
  ],
};

export default farmington;
