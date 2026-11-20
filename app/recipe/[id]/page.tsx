import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="recipe-detail page-shell" aria-busy="true">
          <p>Loading recipe…</p>
        </main>
      }
    >
      <RecipeDetails params={params} />
    </Suspense>
  );
}

async function RecipeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="recipe-detail page-shell">
      <div
        className={`recipe-detail-art recipe-art--${recipe.theme}`}
        aria-hidden="true"
      >
        <span>{recipe.emoji}</span>
      </div>
      <div className="recipe-detail-content">
        <p className="eyebrow">{recipe.category}</p>
        <h1>{recipe.title}</h1>
        <div className="recipe-meta">
          <span>{recipe.cuisine}</span>
          <span className="meta-dot" aria-hidden="true">
            ·
          </span>
          <span>{recipe.minutes} min</span>
        </div>
        <p className="recipe-detail-description">{recipe.description}</p>

        <section className="recipe-detail-section">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="recipe-detail-section">
          <h2>How to make it</h2>
          <ol>
            {recipe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
