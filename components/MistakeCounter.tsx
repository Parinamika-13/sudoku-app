export default function MistakeCounter({ count }: { count: number }) {
  return (
    <p className="text-sm mb-2" style={{ color: "var(--muted)" }}>
      mistakes · {count} / 3
    </p>
  );
}
