import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="recipe-card">
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
        <a
          className="recipe-link"
          href="#recipes"
          aria-label={`View ${recipe.title} recipe`}
        >
          View recipe <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
