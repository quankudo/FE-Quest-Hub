import { motion } from "framer-motion";
export default function ReactionButton({
  label,
  emoji,
  count,
  active,
  onClick,
}: {
  label: string;
  emoji: string;
  count: number;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
        active ? "bg-orange-100" : "bg-slate-100"
      }`}
    >
      <div className="text-lg">{emoji}</div>
      <div className="text-sm">
        {label} · <span className="font-medium">{count}</span>
      </div>
    </motion.button>
  );
}
