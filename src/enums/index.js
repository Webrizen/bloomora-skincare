import { Award, Leaf, Shield, Heart, Share2, ShoppingBag, Star, CheckCircle, Recycle, Sprout, Clock } from 'lucide-react';

export const heroProducts = [
    {
        id: 1,
        title: "Luminous Renewal Collection",
        subtitle: "Advanced Age-Defying Technology",
        description: "Experience transformative results with our clinically-proven formula that reduces wrinkles by 47% in just 4 weeks. Harnessing the power of rare botanical extracts and cutting-edge peptides.",
        image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "New Formula",
        price: "$189",
        features: ["Visibly reduces wrinkles", "Boosts collagen production", "24-hour hydration", "Dermatologist tested"],
        cta: "Discover Renewal"
    },
    {
        id: 2,
        title: "Crystal Clear Elixir",
        subtitle: "Ultimate Brightening Solution",
        description: "Achieve glass-like clarity with our potent Vitamin C complex. This revolutionary serum fades dark spots, evens skin tone, and restores your natural luminosity.",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1200&h=800&fit=crop",
        badge: "Bestseller",
        price: "$145",
        features: ["Fades dark spots", "Even skin tone", "Antioxidant protection", "Non-comedogenic"],
        cta: "Illuminate Skin"
    },
    {
        id: 3,
        title: "Hydra-Infusion Therapy",
        subtitle: "Deep Moisture Infusion",
        description: "Quench your skin's thirst with our 5-layer hydration technology. Featuring 5 types of hyaluronic acid that penetrate different skin layers for plump, dewy complexion.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop",
        badge: "Award Winning",
        price: "$165",
        features: ["5-layer hydration", "72-hour moisture lock", "Skin barrier repair", "Instant plumping effect"],
        cta: "Hydrate Now"
    },
    {
        id: 4,
        title: "Purifying Detox System",
        subtitle: "Complete Pore Refinement",
        description: "Deep clean and refine with our advanced charcoal and AHA complex. Unclogs pores, minimizes their appearance, and reveals smoother, more refined skin texture.",
        image: "https://images.unsplash.com/photo-1648291508079-2d96824fc671?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        badge: "Clean Formula",
        price: "$128",
        features: ["Deep pore cleansing", "Exfoliates dead skin", "Reduces blackheads", "Oil control"],
        cta: "Purify Skin"
    }
]

export const features = [
    {
        id: 1,
        icon: Award,
        title: "Award-Winning Formulas",
        description: "Recognized by leading beauty experts and dermatologists worldwide for innovation and effectiveness.",
        stats: "47+ International Awards",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
        image: "https://images.unsplash.com/photo-1738721797050-f4f1fb63acd7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "left",
        offset: "mt-12"
    },
    {
        id: 2,
        icon: Leaf,
        title: "Clean & Sustainable",
        description: "Our products are 100% vegan, cruelty-free, and packaged in sustainable materials.",
        stats: "98% Natural Ingredients",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop",
        position: "right",
        offset: "-mt-8"
    },
    {
        id: 3,
        icon: Shield,
        title: "Clinically Proven",
        description: "Every formula undergoes rigorous clinical testing to ensure visible, measurable results.",
        stats: "93% Saw Results in 2 Weeks",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=650&fit=crop",
        position: "left",
        offset: "mt-16"
    },
    {
        id: 4,
        icon: Heart,
        title: "Skin-Loving Ingredients",
        description: "We use only the highest quality, ethically sourced ingredients that your skin will love.",
        stats: "0% Harsh Chemicals",
        color: "from-rose-500 to-red-500",
        bgColor: "bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20",
        image: "https://plus.unsplash.com/premium_photo-1661697453671-89365de363bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        position: "right",
        offset: "-mt-4"
    }
]

export const benefits = [
    "Dermatologist tested & approved",
    "Suitable for all skin types",
    "Made in FDA-registered facilities",
    "Free from parabens & sulfates",
    "Eco-conscious packaging",
    "Cruelty-free certification"
]

export const productTypes = [
    {
        name: "Cleansing Rituals",
        items: ["Luxury Facial Cleansers", "Makeup Melting Balms", "Gentle Exfoliating Wash", "Purifying Detox Formulas"],
        description: "Elevate your daily cleansing ceremony",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Hydration Elixirs",
        items: ["Luxury Face Creams", "Revitalizing Serums", "Overnight Renewal", "24-Hour Moisture Lock"],
        description: "Advanced hydration for radiant complexion",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=200&fit=crop"
    },
    {
        name: "Treatment Concentrates",
        items: ["Targeted Serums", "Potent Actives", "Professional-Grade Formulas", "Corrective Solutions"],
        description: "Clinical-grade solutions for visible results",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Toning Essences",
        items: ["Hydrating Mists", "pH-Balancing Toners", "Treatment Essences", "Prep & Prime Solutions"],
        description: "Perfect skin preparation and finishing",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop"
    },
    {
        name: "Solar Protection",
        items: ["Daily Defense SPF", "Age-Defying Sun Care", "Invisible Protection", "Environmental Shield"],
        description: "Ultimate protection against aging and damage",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Intensive Therapies",
        items: ["Renewing Face Masks", "Instant Revival Sheets", "Overnight Treatments", "Targeted Eye Therapy"],
        description: "Spa-grade treatments for transformative results",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300&h=200&fit=crop"
    }
]

export const skinConcerns = [
    {
        name: "Clarity & Blemish Control",
        description: "Targeted solutions for clear, balanced skin",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Age-Defying Innovation",
        description: "Advanced technology for timeless beauty",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=150&fit=crop"
    },
    {
        name: "Luminosity Revival",
        description: "Illuminate and restore your natural radiance",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200&h=150&fit=crop"
    },
    {
        name: "Intensive Hydration",
        description: "Quench and replenish for dewy vitality",
        image: "https://placehold.co/600x400"
    }
]

export const ingredients = [
    {
        name: "Niacinamide Complex",
        description: "Multi-correction for pores and brightness",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Vitamin C Antioxidants",
        description: "Ultimate protection and radiance boost",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop"
    },
    {
        name: "Hyaluronic Hydration",
        description: "Multi-level moisture infusion",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=150&h=150&fit=crop"
    },
    {
        name: "AHA/BHA Clarifying",
        description: "Professional-level resurfacing",
        image: "https://placehold.co/600x400"
    }
]

export const collections = [
    {
        name: "Signature Collection",
        description: "Our most beloved formulations",
        image: "https://placehold.co/600x400"
    },
    {
        name: "New Innovations",
        description: "Latest breakthroughs in skincare science",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=250&h=150&fit=crop"
    },
    {
        name: "Curated Rituals",
        description: "Expertly paired regimens for optimal results",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=250&h=150&fit=crop"
    },
    {
        name: "Pure & Conscious",
        description: "Clean, sustainable luxury",
        image: "https://placehold.co/600x400"
    }
]

export const featuredIngredients = [
    {
        name: "Bakuchiol",
        description: "A natural, plant-based alternative to retinol that smooths fine lines without irritation.",
        benefit: "Anti-Aging & Soothing",
        color: "from-amber-50 to-amber-100",
        darkColor: "from-amber-900/20 to-amber-800/20",
        icon: Sprout,
    },
    {
        name: "Hyaluronic Acid",
        description: "Draws moisture deep into the skin for a plump, dewy, and hydrated complexion.",
        benefit: "Intense Hydration",
        color: "from-blue-50 to-cyan-50",
        darkColor: "from-blue-900/20 to-cyan-900/20",
        icon: Shield,
    },
    {
        name: "Niacinamide",
        description: "Visibly minimizes pores, improves skin tone, and strengthens the skin's barrier.",
        benefit: "Pore Refining",
        color: "from-purple-50 to-pink-50",
        darkColor: "from-purple-900/20 to-pink-900/20",
        icon: Award,
    },
];

// Skincare Rituals
export const skincareRituals = [
    { step: 1, name: "Cleanse", description: "Gently purify with our nutrient-rich cream cleanser.", time: "AM & PM", icon: "☀️🌙" },
    { step: 2, name: "Treat", description: "Target specific concerns with our potent serums.", time: "AM & PM", icon: "💧" },
    { step: 3, name: "Moisturize", description: "Lock in hydration and nourish the skin barrier.", time: "AM & PM", icon: "🌿" },
    { step: 4, name: "Protect", description: "Shield from UVA/UVB rays with our lightweight SPF.", time: "AM", icon: "🛡️" },
];

// Sustainability Promise
export const sustainabilityFeatures = [
    { icon: Recycle, text: "100% Recyclable Packaging" },
    { icon: Leaf, text: "Ethically Sourced Ingredients" },
    { icon: Sprout, text: "Carbon Neutral Shipping" },
    { icon: Award, text: "Leaping Bunny Certified" },
];

// Testimonials
export const testimonials = [
    {
        quote: "My skin has never felt so nourished and balanced. The Natural Renewal Serum is a game-changer.",
        author: "Sarah M.",
        role: "Verified Customer",
        skinType: "Combination Skin"
    },
    {
        quote: "Finally found a luxury brand that aligns with my values. Effective, transparent, and beautiful.",
        author: "Jessica T.",
        role: "Skincare Enthusiast",
        skinType: "Sensitive Skin"
    },
    {
        quote: "The glow is real! I've received so many compliments since switching to Bloomora.",
        author: "Dr. Elena R.",
        role: "Dermatologist",
        skinType: "Mature Skin"
    }
];