"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const matchingRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.cuisine.toLowerCase().includes(normalizedQuery),
  );

  return (
    <>
      <label className="recipe-search">
        <span>Search by recipe or cuisine</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try pasta or Italian"
        />
      </label>
      {matchingRecipes.length > 0 ? (
        <div className="recipe-grid">
          {matchingRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="no-recipes" role="status">
          No recipes match “{query}”. Try a different recipe or cuisine.
        </p>
      )}
    </>
  );
}
