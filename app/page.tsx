import Link from "next/link";
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
          <span className="eyebrow-mark" aria-hidden="true">
            ✳
          </span>
          A little inspiration for your table
          </p>
          <h1>
          Good food,
          <br />
          <span>good mood.</span>
          </h1>
          <p className="hero-description">
          Big flavor, simple steps, and recipes that make any day feel a
          little more delicious.
          </p>
          <a className="primary-button" href="#recipes">
          Explore recipes <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit hero-orbit--outer" />
          <div className="hero-orbit hero-orbit--inner" />
          <span className="hero-food">🥗</span>
          <span className="hero-spark hero-spark--one">✳</span>
          <span className="hero-spark hero-spark--two">✦</span>
          <span className="hero-note">made for real life</span>
        </div>
        <div className="hero-footnote">
          <span className="footnote-line" />
          <span>Something lovely is always cooking</span>
        </div>
      </section>

      <section className="recipes-section page-shell" id="recipes">
        <div className="section-heading">
          <div>
          <p className="eyebrow">From our kitchen to yours</p>
          <h2>Fresh picks for you</h2>
          </div>
          <p className="section-intro">
          Simple ideas, lovely ingredients, and something good for every
          craving.
          </p>
        </div>
        <RecipeGrid recipes={recipes} />
        <p className="recipe-count">
          <span aria-hidden="true">✳</span> A few good things to get you started
        </p>
      </section>

      <footer className="site-footer page-shell" id="about">
        <Link
          className="brand footer-brand"
          href="/"
          aria-label="NextBites home"
        >
          <span className="brand-mark" aria-hidden="true">
          n
          </span>
          <span>nextbites</span>
        </Link>
        <p>Good food, made a little easier.</p>
        <span className="footer-note">Made with a little extra love ✳</span>
      </footer>
    </main>
  );
}
