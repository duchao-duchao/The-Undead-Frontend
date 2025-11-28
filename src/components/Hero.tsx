import { useState } from "react";
import { motion } from "framer-motion";
import { Skull } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [count, setCount] = useState<number>(1024);
  const [burst, setBurst] = useState<boolean>(false);
  const [pieces, setPieces] = useState<{ angle: number; distance: number; alt: boolean }[]>([]);

  const label = `前端已死次数：${count}次`;

  const onClick = () => {
    setCount((c) => c + 1);
    const arr: { angle: number; distance: number; alt: boolean }[] = [];
    for (let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 * i) / 24 + Math.random() * 0.2;
      const distance = 120 + Math.random() * 60;
      arr.push({ angle, distance, alt: i % 2 === 0 });
    }
    setPieces(arr);
    setBurst(true);
    window.setTimeout(() => setBurst(false), 900);
  };

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.glitchWrap}
        animate={{ x: [0, -1, 1, 0], y: [0, 1, -1, 0], skewX: [0, 0.5, -0.5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className={styles.glitch} data-text={label}>{label}</h1>
      </motion.div>
      <p className={styles.subtitle}>每一次被宣告死亡，都是一次进化的重生。</p>

      <div className={styles.ctaRow}>
        <motion.button
          whileTap={{ scale: 0.96 }}
          className={styles.cta}
          onClick={onClick}
          aria-label="I'm still coding"
        >
          I'm still coding
        </motion.button>
        <span className={styles.note}>点击按钮将计数 +1，并触发庆祝效果</span>
      </div>

      {burst && pieces.length > 0 && (
        <div className={styles.burst} aria-hidden>
          {pieces.map((p, idx) => (
            <motion.span
              key={idx}
              className={`${styles.piece} ${p.alt ? styles.alt : ""}`}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0.6 }}
              animate={{
                x: Math.cos(p.angle) * p.distance,
                y: Math.sin(p.angle) * p.distance,
                opacity: 0,
                scale: 1.2,
                rotate: (p.angle * 180) / Math.PI,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
        </div>
      )}

      <div className={styles.meta}>
        <Skull className={styles.metaIcon} size={18} />
        <span>赛博朋克 / 故障艺术 / 黑色幽默</span>
      </div>
    </section>
  );
}