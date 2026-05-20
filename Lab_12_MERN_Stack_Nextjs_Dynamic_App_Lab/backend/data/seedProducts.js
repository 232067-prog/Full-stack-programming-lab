const products = [
  {
    name: "Rattan Curve Lounge",
    description: "A sculptural lounge chair inspired by the hero piece.",
    price: 129.99,
    imageUrl:
      "https://images.unsplash.com/photo-1617325721270-06dce2689456?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "chairs",
    featured: true,
    tags: ["hero", "lounge", "chair"],
    countInStock: 4
  },
  {
    name: "Oak Barrel Side Table",
    description: "Compact side table with rounded edges and warm grain.",
    price: 134.99,
    imageUrl:
      "https://images.unsplash.com/photo-1592991694176-3878d223a0f7?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "tables",
    featured: true,
    tags: ["side", "table"],
    countInStock: 8
  },
  {
    name: "Walnut Storage Console",
    description: "A slim console with hidden storage for entryways.",
    price: 219.0,
    imageUrl:
      "https://images.unsplash.com/photo-1610458131353-1f3f843bb0d6?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "cabinets",
    featured: true,
    tags: ["storage", "console"],
    countInStock: 6
  },
  {
    name: "Rustik Dining Bench",
    description: "Classic bench seat in reclaimed timber tones.",
    price: 179.0,
    imageUrl:
      "https://images.unsplash.com/photo-1763704126621-d7024737a21a?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "chairs",
    featured: false,
    tags: ["bench", "dining"],
    countInStock: 10
  },
  {
    name: "Carved Walnut Bed",
    description: "Statement bed frame with layered detailing.",
    price: 799.0,
    imageUrl:
      "https://images.unsplash.com/photo-1690957530220-98bacb3c1163?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "beds",
    featured: false,
    tags: ["bed", "walnut"],
    countInStock: 2
  },
  {
    name: "Studio Bookcase",
    description: "Open shelving that balances warmth and structure.",
    price: 289.0,
    imageUrl:
      "https://images.unsplash.com/photo-1496104679561-38d3af73f9b0?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "bookcases",
    featured: true,
    tags: ["shelving", "bookcase"],
    countInStock: 5
  },
  {
    name: "Heritage Storage Box",
    description: "Keepsakes box with soft-close lid.",
    price: 64.0,
    imageUrl:
      "https://images.unsplash.com/photo-1722084060100-94d9414629e2?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "boxes",
    featured: false,
    tags: ["box", "storage"],
    countInStock: 12
  },
  {
    name: "Miller Coffee Table",
    description: "Low profile table with a sturdy base.",
    price: 259.0,
    imageUrl:
      "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "tables",
    featured: false,
    tags: ["coffee", "table"],
    countInStock: 7
  },
  {
    name: "Saddleback Armchair",
    description: "A comfortable armchair with artisan stitchwork.",
    price: 199.0,
    imageUrl:
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "chairs",
    featured: false,
    tags: ["armchair"],
    countInStock: 9
  },
  {
    name: "Woven Cabinet",
    description: "Cabinet doors wrapped with cane weave.",
    price: 349.0,
    imageUrl:
      "https://images.unsplash.com/photo-1777620817561-3865fc61bcf0?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "cabinets",
    featured: false,
    tags: ["cabinet", "storage"],
    countInStock: 3
  },
  {
    name: "Arc Bedside Table",
    description: "Rounded bedside companion with drawer storage.",
    price: 149.0,
    imageUrl:
      "https://images.unsplash.com/photo-1593194632872-3d19dab6e278?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "tables",
    featured: true,
    tags: ["bedside", "table"],
    countInStock: 6
  },
  {
    name: "Loomed Media Console",
    description: "Media console with cable management slots.",
    price: 499.0,
    imageUrl:
      "https://images.unsplash.com/photo-1640521843794-cb61ae396ddb?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "cabinets",
    featured: false,
    tags: ["media", "console"],
    countInStock: 2
  },
  {
    name: "Slate Dining Table",
    description: "A bold dining table with a soft matte finish.",
    price: 649.0,
    imageUrl:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "tables",
    featured: true,
    tags: ["dining", "table"],
    countInStock: 4
  },
  {
    name: "Linen Upholstered Bed",
    description: "Soft upholstered frame with a tailored silhouette.",
    price: 899.0,
    imageUrl:
      "https://images.unsplash.com/photo-1530629013299-6cb10d168419?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "beds",
    featured: false,
    tags: ["bed", "linen"],
    countInStock: 3
  },
  {
    name: "Nordic Lounge Chair",
    description: "Minimal lounge chair with sculpted arms.",
    price: 229.0,
    imageUrl:
      "https://images.unsplash.com/photo-1635368992486-d9aec344c26c?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "chairs",
    featured: false,
    tags: ["lounge", "chair"],
    countInStock: 6
  },
  {
    name: "Minimal Nightstand",
    description: "Compact nightstand with softly rounded edges.",
    price: 119.0,
    imageUrl:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "tables",
    featured: false,
    tags: ["nightstand", "table"],
    countInStock: 8
  },
  {
    name: "Glass Front Cabinet",
    description: "A refined cabinet with smoked glass doors.",
    price: 429.0,
    imageUrl:
      "https://images.unsplash.com/photo-1771287490583-ab03482ba338?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "cabinets",
    featured: true,
    tags: ["cabinet", "display"],
    countInStock: 5
  },
  {
    name: "Open Frame Bookcase",
    description: "Open shelving with a bold architectural frame.",
    price: 319.0,
    imageUrl:
      "https://images.unsplash.com/photo-1699443817739-cf2f7cbcd18d?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "bookcases",
    featured: false,
    tags: ["bookcase", "shelving"],
    countInStock: 5
  },
  {
    name: "Modern Storage Box",
    description: "Compact storage box with clean lines and soft touch finish.",
    price: 72.0,
    imageUrl:
      "https://images.unsplash.com/photo-1776083760621-837cd573ed6e?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "boxes",
    featured: false,
    tags: ["box", "storage"],
    countInStock: 11
  },
  {
    name: "Studio Sideboard",
    description: "A low profile sideboard with hidden storage.",
    price: 559.0,
    imageUrl:
      "https://images.unsplash.com/photo-1593067607070-95193763e3ab?auto=format&fit=crop&w=1200&q=80",
    categorySlug: "cabinets",
    featured: true,
    tags: ["sideboard", "storage"],
    countInStock: 4
  }
];

module.exports = products;
