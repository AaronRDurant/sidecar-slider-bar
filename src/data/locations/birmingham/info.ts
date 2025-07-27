// /src/data/locations/birmingham.ts
const birmingham = {
  name: "Birmingham",
  address: "117 Willits Street, Birmingham, MI 48009",
  phone: "(248) 792-2380",
  hours: "Monday – Sunday: 11:00 AM – 2:00 AM",
  deliveryPartners: [
    {
      name: "DoorDash",
      url: "https://www.doordash.com/store/sidecar-slider-bar-birmingham-...",
    },
    {
      name: "GrubHub",
      url: "https://www.grubhub.com/restaurant/sidecar-slider-bar-birmingham-...",
    },
    {
      name: "UberEats",
      url: "https://www.ubereats.com/store/sidecar-slider-bar-birmingham-...",
    },
  ],
  coordinates: {
    lat: 42.54655,
    lng: -83.21524,
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

export default birmingham;
