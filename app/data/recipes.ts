export type Recipe = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
  category: string;
  emoji: string;
  theme: "peach" | "green" | "yellow" | "lavender";
};

export const recipes: Recipe[] = [
  {
    id: "lemon-pasta",
    title: "Lemony garden pasta",
    description: "Silky lemon sauce, sweet peas, and a shower of parmesan.",
    minutes: 20,
    cuisine: "Italian",
    category: "Weeknight favorite",
    emoji: "🍋",
    theme: "yellow",
  },
  {
    id: "crispy-salmon-bowl",
    title: "Crispy salmon bowl",
    description: "Golden salmon with herby rice, cucumber, and a quick yogurt sauce.",
    minutes: 30,
    cuisine: "Japanese-inspired",
    category: "High protein",
    emoji: "🍣",
    theme: "peach",
  },
  {
    id: "green-goddess-wrap",
    title: "Green goddess wraps",
    description: "Crunchy greens and creamy avocado tucked into a warm tortilla.",
    minutes: 15,
    cuisine: "California",
    category: "Fresh & easy",
    emoji: "🥑",
    theme: "green",
  },
  {
    id: "berry-yogurt-bowl",
    title: "Berry breakfast bowl",
    description: "Thick yogurt, juicy berries, toasted oats, and a little honey.",
    minutes: 10,
    cuisine: "Breakfast",
    category: "No-cook",
    emoji: "🫐",
    theme: "lavender",
  },
];
