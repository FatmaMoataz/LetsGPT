import logo from './logo.png';
import logo2 from './logo2.png';
import search from './search.png';
import trash from './trash.png';
import trash_icon from './trash_icon.png';
import gallery from './gallery.png';
import diamond from './diamond.png';
import sun from './sun.png';
import logo_sidebar from './logo_sidebar.png';
import logo_sidebar2 from './logo_sidebar2.png';
import user from './user.png';
import logout from './logout.png';
import logout3 from './logout3.png';
import close3 from './close3.png';
import menu from './menu.png';
import send_icon from './send_icon.png';

export const assets = {
  logo,
  logo2,
  search,
  trash,
  trash_icon,
  gallery,
  diamond,
  sun,
  logo_sidebar,
  logo_sidebar2,
  user,
  logout,
  menu,
  close3,
  logout3,
  send_icon,
};

export const dummyUserData = {
    "_id": "64a7b2f5e1b2c3d4e5f67890",
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "password": "hashed_password",
    "credits": 150,
}

export const dummyPlans = [
  {
    _id: "basic",
    name: "Basic",
    price: 5,
    credits: 100,
    features: [
      "100 AI credits",
      "Standard response speed",
      "Access to basic models",
      "Community image access",
    ],
  },
  {
    _id: "pro",
    name: "Pro",
    price: 15,
    credits: 500,
    features: [
      "500 AI credits",
      "Faster response speed",
      "Access to advanced models",
      "Priority generation queue",
      "Community image publishing",
    ],
  },
  {
    _id: "enterprise",
    name: "Enterprise",
    price: 49,
    credits: 5000,
    features: [
      "5000 AI credits",
      "Ultra-fast responses",
      "Unlimited conversations",
      "Advanced image generation",
      "Dedicated support",
    ],
  },
]


export const dummyChats = [
    {
        "_id": "chat_001",
        "title": "Tech Support Help",
        "messages": [
            {
                "role": "user",
                "content": "Hello, I'm having trouble with my internet connection. Can you help?",
                "timestamp": "2025-06-01T10:00:00Z"
            },
            {
                "role": "chatbot",
                "content": "Hello! I'd be happy to help with your internet connection. Let's start by troubleshooting. Are you connected via Wi-Fi or Ethernet?",
                "timestamp": "2025-06-01T10:00:30Z"
            },
            {
                "role": "user",
                "content": "I'm using Wi-Fi. The connection keeps dropping.",
                "timestamp": "2025-06-01T10:01:15Z"
            },
            {
                "role": "chatbot",
                "content": "I understand. Let's try a few steps: 1. Restart your router 2. Move closer to the router 3. Check if other devices have the same issue. Have you tried restarting your router?",
                "timestamp": "2025-06-01T10:01:45Z"
            }
        ],
        "updatedAt": "2025-06-01T10:01:45Z"
    },
    {
        "_id": "chat_002",
        "title": "Recipe Recommendations",
        "messages": [
            {
                "role": "user",
                "content": "Hi! Can you suggest some vegetarian dinner recipes?",
                "timestamp": "2025-06-02T14:30:00Z"
            },
            {
                "role": "chatbot",   
                "content": "Certainly! Here are 3 popular vegetarian dinner ideas:\n\n1. **Vegetable Stir-fry** - Quick and customizable\n2. **Lentil Curry** - Protein-rich and flavorful\n3. **Stuffed Bell Peppers** - Colorful and satisfying\n\nDo you have any dietary restrictions or preferences?",
                "timestamp": "2025-06-02T14:30:25Z"
            },
            {
                "role": "user",
                "content": "I'm avoiding gluten. Which of these would work best?",
                "timestamp": "2025-06-02T14:31:10Z"
            },
            {
                "role": "chatbot",
                "content": "Great question! All three can be made gluten-free:\n• Vegetable Stir-fry - Use tamari instead of soy sauce\n• Lentil Curry - Naturally gluten-free\n• Stuffed Bell Peppers - Ensure any breadcrumbs are gluten-free\n\nThe lentil curry is the most naturally gluten-free option. Would you like the recipe?",
                "timestamp": "2025-06-02T14:31:40Z"
            }
        ],
        "updatedAt": "2025-06-02T14:31:40Z"
    },
    {
        "_id": "chat_003",
        "title": "Travel Planning",
        "messages": [
            {
                "role": "user",
                "content": "I'm planning a trip to Japan next month. Any suggestions?",
                "timestamp": "2025-06-03T09:15:00Z"
            },
            {
                "role": "chatbot",
                "content": "Japan is amazing! Which cities are you considering? Popular options include Tokyo, Kyoto, and Osaka. How long will your trip be?",
                "timestamp": "2025-06-03T09:15:30Z"
            },
            {
                "role": "user",
                "content": "10 days, and I'm thinking Tokyo and Kyoto.",
                "timestamp": "2025-06-03T09:16:20Z"
            },
            {
                "role": "chatbot",
                "content": "Perfect combination! For a 10-day trip:\n• 5-6 days in Tokyo\n• 3-4 days in Kyoto\n• Consider a day trip to Nara or Osaka\n\nWould you like specific recommendations for attractions, food, or accommodations?",
                "timestamp": "2025-06-03T09:16:50Z"
            }
        ],
        "updatedAt": "2025-06-03T09:16:50Z"
    }
];

export const dummyPublishedImages = [
  {
    _id: "img_001",
    title: "Futuristic AI Assistant",
    prompt: "A futuristic AI assistant glowing in purple neon light, cyberpunk style",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    publishedBy: {
      _id: "user_001",
      name: "Jane Smith",
      avatar: user,
    },
    likes: 124,
    createdAt: "2025-06-01T18:20:00Z",
  },
  {
    _id: "img_002",
    title: "Minimal Workspace",
    prompt: "Minimal modern workspace with laptop, coffee, and soft lighting",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    publishedBy: {
      _id: "user_002",
      name: "Alex Johnson",
      avatar: user,
    },
    likes: 89,
    createdAt: "2025-06-02T11:45:00Z",
  },
  {
    _id: "img_003",
    title: "Cyberpunk City",
    prompt: "Cyberpunk city at night with neon signs and flying cars",
    imageUrl: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
    publishedBy: {
      _id: "user_003",
      name: "Mohamed Ali",
      avatar: user,
    },
    likes: 203,
    createdAt: "2025-06-03T20:10:00Z",
  },
  {
    _id: "img_004",
    title: "Fantasy Landscape",
    prompt: "Epic fantasy landscape with mountains, glowing rivers, and dragons",
    imageUrl: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    publishedBy: {
      _id: "user_004",
      name: "Sara Lee",
      avatar: user,
    },
    likes: 56,
    createdAt: "2025-06-04T09:30:00Z",
  },
];
