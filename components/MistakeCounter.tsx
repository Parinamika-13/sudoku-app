export default function MistakeCounter({ count }: { count: number }) {
  return (
    <p className="text-sm text-white/70">
      mistakes · {count} / 3
    </p>
  );
}
