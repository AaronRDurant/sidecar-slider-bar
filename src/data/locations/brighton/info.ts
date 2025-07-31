// /src/data/locations/brighton.ts
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
          name: "Loaded Tots",
          price: "$14.99",
          description:
            "Chili, bacon, cheese, sour cream, green onion, jalapeños",
        },
        {
          name: "Sidecar Nachos",
          price: "$13.99",
          description:
            "House chips, queso, pico de gallo, sour cream, jalapeños",
        },
        {
          name: "Fried Pickles",
          price: "$9.99",
          description: "Crispy spears served with ranch dipping sauce",
        },
      ],
    },
    {
      category: "Sliders",
      items: [
        {
          name: "Classic Slider",
          price: "$4.99",
          description: "Beef patty, cheddar cheese, pickles, ketchup, mustard",
        },
        {
          name: "BBQ Bacon Slider",
          price: "$5.49",
          description: "Beef patty, BBQ sauce, bacon, crispy onions",
        },
        {
          name: "Chicken Parm Slider",
          price: "$5.29",
          description: "Fried chicken, marinara, mozzarella, basil",
        },
        {
          name: "Veggie Slider",
          price: "$4.79",
          description:
            "Grilled portobello, arugula, goat cheese, balsamic glaze",
        },
      ],
    },
    {
      category: "Sides",
      items: [
        {
          name: "Seasoned Fries",
          price: "$4.49",
          description: "Crispy and golden, dusted with signature spices",
        },
        {
          name: "Sweet Potato Fries",
          price: "$4.99",
          description: "Served with cinnamon-maple dip",
        },
        {
          name: "Side Salad",
          price: "$3.99",
          description: "Mixed greens, tomato, cucumber, red onion, vinaigrette",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Fountain Soda",
          price: "$2.99",
          description: "Coke, Diet Coke, Sprite, Root Beer, Lemonade",
        },
        {
          name: "Craft Beer",
          price: "$6.00",
          description: "Ask your server for rotating local taps",
        },
        {
          name: "Signature Margarita",
          price: "$9.00",
          description: "House tequila, lime, triple sec, salted rim",
        },
      ],
    },
  ],
};

export default brighton;
