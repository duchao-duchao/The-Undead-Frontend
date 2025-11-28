import { motion } from "framer-motion";
import { Skull } from "lucide-react";
import styles from "./Timeline.module.css";

type DeathEvent = {
  year: number;
  title: string;
  killer: string;
  status: string;
};

const DEATH_TIMELINE: DeathEvent[] = [
  { year: 2011, title: "jQuery 已死", killer: "Angular/Backbone", status: "依然健在" },
  { year: 2015, title: "Web 已死", killer: "Native Apps", status: "PWA 反击" },
  { year: 2018, title: "HTML/CSS 已死", killer: "CSS-in-JS", status: "混战中" },
  { year: 2023, title: "前端开发已死", killer: "GPT-4", status: "变成了 Prompt Engineer" },
  { year: 2024, title: "人类程序员已死", killer: "Cursor/Devin", status: "我们正在用 AI 写这个网站" },
];

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <div className={styles.rail} />
      {DEATH_TIMELINE.map((item, i) => (
        <div key={item.year} className={styles.item}>
          <span className={styles.dot} />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={styles.card}
          >
            <div className={styles.year}>
              <Skull size={18} />
              <span>{item.year}</span>
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.report}>
              <div>
                <span className={styles.label}>凶手：</span>
                <span>{item.killer}</span>
              </div>
              <div>
                <span className={styles.label}>状态：</span>
                <span>{item.status}</span>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}