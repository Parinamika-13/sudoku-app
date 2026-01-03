export default function AdModal({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div
        className="p-6 rounded-xl text-center"
        style={{ backgroundColor: "var(--surface)", color: "var(--text)" }}
      >
        <p className="mb-4">Session paused</p>
        <button
          onClick={onContinue}
          className="px-4 py-2 rounded"
          style={{ backgroundColor: "var(--accent)", color: "white" }}
        >
          Watch Ad
        </button>
      </div>
    </div>
  );
}
