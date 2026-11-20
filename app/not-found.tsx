import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell state-page">
      <span className="state-mark" aria-hidden="true">
        ?
      </span>
      <p className="eyebrow">Looks like this page wandered off</p>
      <h1>We couldn’t find that recipe.</h1>
      <p>Try another tasty idea from the recipe collection.</p>
      <Link className="primary-button" href="/">
        Back to all recipes <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
