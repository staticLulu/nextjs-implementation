"use client"
export default function ErrorBoundary({error, reset}:{error: Error; reset: () => void;}) {
  return (
    <div className="flex gap-2.5 items-center my-5">
      Error {error.message}
      <button onClick={reset} className="border border-slate-400 p-1">
        Try again
      </button>
    </div>
  )
}