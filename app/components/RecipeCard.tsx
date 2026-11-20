import type { Recipe } from "../data/recipes";
import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      className="recipe-card"
      href={`/recipe/${recipe.id}`}
      aria-label={`View ${recipe.title} recipe`}
    >
      <div
        className={`recipe-art recipe-art--${recipe.theme}`}
        aria-hidden="true"
      >
        <span className="recipe-emoji">{recipe.emoji}</span>
        <span className="recipe-art-spark recipe-art-spark--one">✳</span>
        <span className="recipe-art-spark recipe-art-spark--two">·</span>
        <span className="recipe-category">{recipe.category}</span>
      </div>
      <div className="recipe-content">
        <div className="recipe-meta">
          <span>{recipe.cuisine}</span>
          <span className="meta-dot" aria-hidden="true">
            ·
          </span>
          <span>{recipe.minutes} min</span>
        </div>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <span className="recipe-link">
          View recipe <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
