/**
 * 进度管理 —— 纯客户端 localStorage
 * 
 * 存储结构：
 * {
 *   "completedDays": [1, 2, 3, ...],      // 已完成的天
 *   "checklists": { "M01-1": [true, false, true], ... },  // 验收清单勾选
 *   "currentDay": 5,                       // 当前学到第几天
 * }
 */

const STORAGE_KEY = "training-progress";

interface ProgressData {
  completedDays: number[];
  checklists: Record<string, boolean[]>;
  currentDay: number;
}

function load(): ProgressData {
  if (typeof window === "undefined") {
    return { completedDays: [], checklists: {}, currentDay: 1 };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedDays: [], checklists: {}, currentDay: 1 };
}

function save(data: ProgressData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getCurrentDay(): number {
  return load().currentDay;
}

export function getCompletedDays(): number[] {
  return load().completedDays;
}

export function isDayUnlocked(day: number): boolean {
  if (day === 1) return true; // Day 1 永远解锁
  const { completedDays } = load();
  return completedDays.includes(day - 1);
}

export function isDayCompleted(day: number): boolean {
  return load().completedDays.includes(day);
}

export function getChecklist(key: string): boolean[] {
  return load().checklists[key] || [];
}

export function toggleChecklist(key: string, index: number): boolean[] {
  const data = load();
  if (!data.checklists[key]) data.checklists[key] = [];
  data.checklists[key][index] = !data.checklists[key][index];

  // 检查是否全部勾完 → 标记当天完成
  const allChecked = data.checklists[key].every((v) => v);
  if (allChecked) {
    const dayMatch = key.match(/^D(\d+)/);
    if (dayMatch) {
      const day = parseInt(dayMatch[1]);
      if (!data.completedDays.includes(day)) {
        data.completedDays.push(day);
        // 如果下一天还没解锁，把 currentDay 推到下一天
        if (data.currentDay <= day) {
          data.currentDay = day + 1;
        }
      }
    }
  }

  save(data);
  return data.checklists[key];
}

/** 检查当天验收清单是否全部勾完 */
export function areAllChecked(key: string, totalItems: number): boolean {
  const checks = load().checklists[key] || [];
  return checks.length >= totalItems && checks.slice(0, totalItems).every((v) => v);
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
