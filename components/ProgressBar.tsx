import { useEffect, useState } from "react";
import { getCurrentDay, getCompletedDays } from "@/lib/progress";

export default function ProgressBar() {
  const [current, setCurrent] = useState(1);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCurrent(getCurrentDay());
    setCompleted(getCompletedDays().length);
  }, []);

  const pct = Math.round((completed / 90) * 100);

  return (
    <div className="flex items-center gap-2 text-xs text-zinc-500">
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span>
        {completed}/90 天
      </span>
    </div>
  );
}
