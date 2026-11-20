export type Recipe = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  cuisine: string;
  category: string;
  emoji: string;
  theme: "peach" | "green" | "yellow" | "lavender";
  ingredients: string[];
  steps: string[];
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
    ingredients: [
      "12 oz pasta",
      "1 cup sweet peas",
      "1 lemon, zested and juiced",
      "1/2 cup grated parmesan",
      "2 tbsp olive oil",
      "Salt and black pepper",
    ],
    steps: [
      "Cook the pasta in salted water according to the package directions. Add the peas for the final 2 minutes.",
      "Reserve 1 cup of pasta water, then drain the pasta and peas.",
      "Return the pasta to the pot and toss with lemon zest, lemon juice, olive oil, parmesan, and a splash of pasta water.",
      "Season with salt and pepper, adding more pasta water as needed for a silky sauce.",
    ],
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
    ingredients: [
      "2 salmon fillets",
      "1 cup rice",
      "1 cucumber, sliced",
      "1 tbsp soy sauce",
      "1/2 cup plain yogurt",
      "1 tbsp chopped fresh herbs",
    ],
    steps: [
      "Cook the rice according to the package directions.",
      "Pat the salmon dry, season it, and sear in a hot oiled pan until crisp and cooked through.",
      "Stir the yogurt together with the fresh herbs and a squeeze of lemon.",
      "Serve the salmon over rice with cucumber, yogurt sauce, and soy sauce.",
    ],
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
    ingredients: [
      "2 large tortillas",
      "1 ripe avocado",
      "2 cups mixed salad greens",
      "1/2 cucumber, sliced",
      "1/4 cup plain yogurt",
      "1 tbsp lemon juice",
    ],
    steps: [
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Mix the yogurt with a little lemon juice and season to taste.",
      "Spread avocado over each tortilla, then add greens and cucumber.",
      "Drizzle with yogurt sauce, roll up tightly, and slice in half.",
    ],
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
    ingredients: [
      "1 cup thick plain yogurt",
      "1/2 cup mixed berries",
      "1/4 cup toasted oats",
      "1 tsp honey",
      "1 tbsp chopped nuts",
    ],
    steps: [
      "Spoon the yogurt into a breakfast bowl.",
      "Top with berries, toasted oats, and chopped nuts.",
      "Drizzle with honey and serve right away.",
    ],
  },
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => recipe.id === id);
}
