import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand-mark" aria-hidden="true">
            n
          </span>
          <span>nextbites</span>
        </Link>
        <div className="nav-links">
          <a className="nav-link" href="#recipes">
            Recipes
          </a>
          <a className="nav-link" href="#about">
            Our kitchen
          </a>
          <a className="nav-cta" href="#recipes">
            Find your next bite <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
