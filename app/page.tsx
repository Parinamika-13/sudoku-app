import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center text-center gap-6 max-w-lg px-6">
        
        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight">
          Sudoku
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 leading-relaxed">
          A quiet reasoning interface.  
          Focused logic. Three mistakes only.
        </p>

        {/* CTA */}
        <Link
          href="/game"
          className="
            mt-4 rounded-full
            bg-white text-black
            px-6 py-3
            transition
            hover:bg-white/90
          "
        >
          Enter Interface
        </Link>

        {/* Footer hint */}
        <p className="mt-10 text-xs text-white/40">
          experimental · single-session logic
        </p>
      </div>
    </div>
  );
}
