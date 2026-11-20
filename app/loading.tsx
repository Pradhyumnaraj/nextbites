export default function Loading() {
  return (
    <main className="page-shell state-page" aria-live="polite" aria-busy="true">
      <span className="state-mark" aria-hidden="true">
        ✳
      </span>
      <h1>Loading something delicious…</h1>
      <p>Just a moment while we get things ready.</p>
    </main>
  );
}
