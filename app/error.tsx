"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="page-shell state-page">
      <span className="state-mark" aria-hidden="true">
        !
      </span>
      <p className="eyebrow">A little kitchen hiccup</p>
      <h1>That didn’t go as planned.</h1>
      <p>Please try again. Your recipes will be right here.</p>
      <button className="primary-button state-retry" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
