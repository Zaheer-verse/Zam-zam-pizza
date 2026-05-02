// ============================================================
//  ZAM ZAM PIZZA — MENU DATA
//  All images sourced from Unsplash (free, no attribution req)
// ============================================================

const MENU_ITEMS = [

  // ── PIZZAS ────────────────────────────────────────────────
  {
    id: 1, cat: "pizza",
    name: "Chicken Tikka Pizza",
    desc: "Chicken tikka + Green pepper + Onion + Special sauce + Sambal",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ],
    badge: "Popular"
  },
  {
    id: 2, cat: "pizza",
    name: "Zam Zam Fajita Pizza",
    desc: "Chicken fajita + Green pepper + Onion + Fajita sauce + Black olives + Tomato + Cheese",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ],
    badge: "Chef's Pick"
  },
  {
    id: 3, cat: "pizza",
    name: "Chicken Supreme Pizza",
    desc: "Chicken supreme + Chicken fajita + Chicken tikka + Capsicum + Black olives + Mushroom + Sauce + Onions",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ]
  },
  {
    id: 4, cat: "pizza",
    name: "Achari Chicken Pizza",
    desc: "Achari chicken + Sweet corn + Onion + Tomato + Capsicum + Cheese",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ]
  },
  {
    id: 5, cat: "pizza",
    name: "Bar.B.Q Pizza",
    desc: "Chicken BBQ + Bell pepper + Onion + Chilli + Tomato sauce + Cheese + Tomato",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ],
    badge: "Smoky"
  },
  {
    id: 6, cat: "pizza",
    name: "Vegetable Pizza",
    desc: "Capsicum + Tomato + Onion + Mushroom + Sweet corn + Cheese",
    img: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ]
  },
  {
    id: 7, cat: "pizza",
    name: "Tandoori Pizza",
    desc: "Seekh chicken + Onion + Jalapeño + Olives + Tomato + Cheese",
    img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ],
    badge: "Spicy 🌶️"
  },
  {
    id: 8, cat: "pizza",
    name: "Hot & Spicy Pizza",
    desc: "Spicy chicken + Onion + Capsicum + Tomato + Black olives + Green pepper + Cheese",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ],
    badge: "🔥 Hot"
  },
  {
    id: 9, cat: "pizza",
    name: "Cheese Lover Pizza",
    desc: "Olives + Mushroom + Capsicum + Cheese chicken",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ]
  },
  {
    id: 10, cat: "pizza",
    name: "Malai Boti Pizza",
    desc: "Special creamy tikka chicken + Onion + Green sauce + Capsicum + Oregano + Black olives + Creamy cheese",
    img: "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=400&q=80",
    sizes: [
      { label: '7"', price: 600 },
      { label: '11"', price: 1000 },
      { label: 'Family', price: 1300 }
    ],
    badge: "Creamy"
  },
  {
    id: 11, cat: "pizza",
    name: "Kabab Crust Pizza",
    desc: "Chicken kabab + Capsicum + Black olives + Mushroom",
    img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&q=80",
    sizes: [
      { label: '7"', price: 700 },
      { label: '11"', price: 1150 },
      { label: 'Family', price: 1500 }
    ],
    badge: "Special"
  },
  {
    id: 12, cat: "pizza",
    name: "Kabab Boust Pizza",
    desc: "Chicken kabab + Capsicum + Onion + Tomato + Cheese",
    img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&q=80",
    sizes: [
      { label: '7"', price: 700 },
      { label: '11"', price: 1150 },
      { label: 'Family', price: 1500 }
    ],
    badge: "Special"
  },

  // ── BURGERS ────────────────────────────────────────────────
  {
    id: 13, cat: "burger",
    name: "Zinger Burger",
    desc: "Crispy fried chicken fillet with fresh lettuce, mayo in a toasted sesame bun",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    sizes: [{ label: 'Single', price: 300 }],
    badge: "Bestseller"
  },
  {
    id: 14, cat: "burger",
    name: "Mighty Burger",
    desc: "Double stacked crispy chicken with cheese, lettuce and special sauce",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
    sizes: [{ label: 'Single', price: 550 }]
  },
  {
    id: 15, cat: "burger",
    name: "Twister / Wrap",
    desc: "Tender chicken strips in a soft tortilla wrap with fresh veggies and sauce",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
    sizes: [{ label: 'Single', price: 350 }]
  },
  {
    id: 16, cat: "burger",
    name: "Zinger Shawarma",
    desc: "Zinger-style shawarma with garlic sauce, pickles and fresh vegetables",
    img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80",
    sizes: [{ label: 'Single', price: 300 }]
  },
  {
    id: 17, cat: "burger",
    name: "Beef Burger",
    desc: "Juicy beef patty with melted cheese, lettuce, tomato and burger sauce",
    img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80",
    sizes: [{ label: 'Single', price: 350 }]
  },

  // ── CHICKEN ────────────────────────────────────────────────
  {
    id: 18, cat: "chicken",
    name: "Hot Wings (10 pcs)",
    desc: "Crispy fried chicken wings, seasoned to perfection with hot spices",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80",
    sizes: [{ label: '10 pcs', price: 600 }, { label: '5 pcs', price: 320 }],
    badge: "🔥 Hot"
  },
  {
    id: 19, cat: "chicken",
    name: "Chicken Nuggets",
    desc: "Golden-fried chicken nuggets, tender inside, crispy outside",
    img: "https://images.unsplash.com/photo-1585703900468-13c7a978ad86?w=400&q=80",
    sizes: [{ label: '10 pcs', price: 600 }, { label: '5 pcs', price: 320 }]
  },
  {
    id: 20, cat: "chicken",
    name: "Juicy Chicken Tenders",
    desc: "Long crispy chicken tenders, perfectly seasoned and fried golden",
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80",
    sizes: [{ label: '10 pcs', price: 800 }],
    badge: "Juicy"
  },
  {
    id: 21, cat: "chicken",
    name: "Popcorn Chicken",
    desc: "Bite-sized crispy popcorn chicken pieces, great for snacking",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
    sizes: [{ label: '10 pcs', price: 500 }]
  },
  {
    id: 22, cat: "chicken",
    name: "Croquottos",
    desc: "Crunchy breaded chicken croquettes with a soft, savory filling",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
    sizes: [{ label: '10 pcs', price: 700 }]
  },
  {
    id: 23, cat: "chicken",
    name: "1 Chicken Piece",
    desc: "Crispy fried whole chicken piece, golden and juicy",
    img: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&q=80",
    sizes: [{ label: 'Single', price: 250 }]
  },
  {
    id: 24, cat: "chicken",
    name: "Chicken Chips",
    desc: "Crispy shredded chicken chips, great as a side or snack",
    img: "https://images.unsplash.com/photo-1598214886806-c257b193c7de?w=400&q=80",
    sizes: [{ label: 'Portion', price: 550 }]
  },

  // ── FRIES ─────────────────────────────────────────────────
  {
    id: 25, cat: "fries",
    name: "Small Fries",
    desc: "Golden crispy French fries, salted to perfection",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
    sizes: [{ label: 'Small', price: 150 }]
  },
  {
    id: 26, cat: "fries",
    name: "Medium Fries",
    desc: "Golden crispy French fries — medium serving",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80",
    sizes: [{ label: 'Medium', price: 200 }]
  },
  {
    id: 27, cat: "fries",
    name: "Large Fries",
    desc: "Golden crispy French fries — large serving for big appetites",
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80",
    sizes: [{ label: 'Large', price: 300 }]
  },
  {
    id: 28, cat: "fries",
    name: "Family Fries",
    desc: "Super-sized crispy fries perfect for the whole family",
    img: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80",
    sizes: [{ label: 'Family', price: 350 }],
    badge: "Family Size"
  },

  // ── STEAK & PARATHA ───────────────────────────────────────
  {
    id: 29, cat: "steak",
    name: "Pizza Paratha",
    desc: "Unique fusion of crispy paratha with pizza toppings and melted cheese",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
    sizes: [{ label: 'Single', price: 600 }],
    badge: "Fusion"
  },
  {
    id: 30, cat: "steak",
    name: "Cheese Steak",
    desc: "Tender grilled steak topped with melted cheese and caramelized onions",
    img: "https://images.unsplash.com/photo-1612392166886-ee8475b03af2?w=400&q=80",
    sizes: [{ label: 'Single', price: 650 }, { label: 'Double', price: 1200 }]
  },
  {
    id: 31, cat: "steak",
    name: "Crown Cheese Steak",
    desc: "Premium crown-style cheese steak with special sauce and toppings",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    sizes: [{ label: 'Single', price: 1000 }, { label: 'Double', price: 1000 }],
    badge: "Premium"
  }
];

// ── DEALS ──────────────────────────────────────────────────
const DEALS = [
  {
    id: 'd10', num: 'Deal 10',
    name: '1 Zinger Burger + 1 Reg Fries + 1 Reg Drink',
    price: 550,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80'
  },
  {
    id: 'd13', num: 'Deal 13',
    name: '1 Chicken Burger + 1 Reg Drink',
    price: 400,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
  },
  {
    id: 'd14', num: 'Deal 14',
    name: '1 Zinger Burger + 1 Chicken Piece + 1 Reg Fries + 1 Reg Drink',
    price: 750,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80'
  },
  {
    id: 'd15', num: 'Deal 15',
    name: '2 Zinger Burgers + 5 Nuggets + 1 Ltr Coca Cola + 5 Popcorn',
    price: 1350,
    img: 'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?w=400&q=80'
  },
  {
    id: 'd23', num: 'Deal 23',
    name: '1 Medium Pizza + 5 Chicken Pcs + 1.5 Ltr Drink',
    price: 2200,
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80',
    badge: 'Best Value'
  },
  {
    id: 'd25', num: 'Deal 25',
    name: '4 Zinger Burgers + 1 Ltr Coca Cola',
    price: 1400,
    img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&q=80'
  },
  {
    id: 'd26', num: 'Deal 26',
    name: '1 Medium Pizza + 2 Zinger Burgers + 1 Family Fries + 1.5L Drink',
    price: 2000,
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80'
  },
  {
    id: 'd27', num: 'Deal 27',
    name: '1 Large Pizza + 4 Zinger Burgers + 1 Family Fries + 1.5L Drink',
    price: 2900,
    img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80',
    badge: 'Family Fav'
  },
  {
    id: 'd28', num: 'Deal 28',
    name: '1 Large Pizza + 4 Zinger Burgers + 1 Family Fries + 5 Pcs Chicken',
    price: 4000,
    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80'
  },
  {
    id: 'd2x', num: 'Deal 2X',
    name: '2 Large Pizzas + 10 Pcs Chicken + 12 Hot Wings + 1.5L Coca Cola',
    price: 5300,
    img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80',
    badge: '🔥 Mega Deal'
  },
  {
    id: 'd29', num: 'Birthday Deal 🎂',
    name: '3 Large Pizzas + 20 Hot Wings + 2 Family Fries + 5 Zinger Burgers + 2 Pound Cake + 2×1.5L Coca Cola',
    price: 9000,
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=80',
    badge: '🎉 Party Pack'
  }
];
