export default function AdModal({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white/10 p-6 rounded">
        <p className="mb-4 text-white">
          Session paused. Watch ad to continue.
        </p>
        <button
          onClick={onContinue}
          className="px-4 py-2 bg-white text-black rounded"
        >
          Watch Ad
        </button>
      </div>
    </div>
  );
}
