import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Danmaku.module.css";

type Tone = "neon" | "danger";
type Item = {
  id: number;
  text: string;
  y: number; // 5-90 (percent)
  tone: Tone;
  duration: number; // seconds
};

function useWindowWidth() {
  const [w, setW] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  return w;
}

function createItem(text: string): Item {
  const y = 5 + Math.random() * 85;
  const tone: Tone = Math.random() < 0.6 ? "neon" : "danger";
  const duration = 8 + Math.random() * 8;
  return { id: Date.now() + Math.floor(Math.random() * 100000), text, y, tone, duration };
}

const SEED = [
  "前端已死 ×1", "你以为 React 会倒下？", "我还在写代码", "CSS 才是魔法", "Hooks 不死",
  "Vite 让开发复活", "AI 只是队友", "jQuery 续命中", "PWA 再次进攻", "组件永恒轮回"
];

export default function Danmaku({ auto = true }: { auto?: boolean }) {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const width = useWindowWidth();
  const shouldReduce = useReducedMotion();
  const timer = useRef<number | null>(null);

  const push = (text: string) => {
    setItems((prev) => [...prev, createItem(text)]);
  };

  useEffect(() => {
    if (!auto || shouldReduce) return;
    const tick = () => {
      const text = SEED[Math.floor(Math.random() * SEED.length)];
      push(text);
    };
    timer.current = window.setInterval(tick, 1500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [auto, shouldReduce]);

  const targetX = useMemo(() => -width - 400, [width]);

  return (
    <>
      <div className={styles.overlay} aria-hidden>
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`${styles.item} ${styles[item.tone]}`}
            style={{ top: `${item.y}%`, left: width }}
            initial={{ x: 0, opacity: 0.9 }}
            animate={{ x: targetX, opacity: 1 }}
            transition={{ duration: item.duration, ease: "linear" }}
            onAnimationComplete={() =>
              setItems((prev) => prev.filter((i) => i.id !== item.id))
            }
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      <div className={styles.sendBar} role="form" aria-label="发送弹幕">
        <input
          className={styles.input}
          placeholder="输入弹幕..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => {
            const text = input.trim();
            if (text.length > 0) {
              push(text);
              setInput("");
            }
          }}
        >
          发射
        </button>
      </div>
    </>
  );
}