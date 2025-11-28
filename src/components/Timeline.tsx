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
  { year: 2003, title: "表格布局已死", killer: "CSS", status: "在老系统游魂" },
  { year: 2006, title: "IE6 已死", killer: "标准委员会/Chrome", status: "政企内网：不死不休" },
  { year: 2008, title: "Flash 已死", killer: "iPhone/HTML5", status: "彻底埋葬" },
  { year: 2010, title: "切图仔已死", killer: "组件化", status: "变成了 UI 工程师" },
  { year: 2011, title: "jQuery 已死", killer: "Angular/Backbone", status: "依然健在" },
  { year: 2012, title: "Backbone 已死", killer: "Angular/Ember", status: "仍被面试问到" },
  { year: 2013, title: "SPA 已死", killer: "SEO", status: "SSR/同构打补丁" },
  { year: 2014, title: "AngularJS 已死", killer: "Angular(2+)", status: "版本号即重生" },
  { year: 2015, title: "Web 已死", killer: "Native Apps", status: "PWA 反击" },
  { year: 2016, title: "MVC 已死", killer: "Redux", status: "状态即一切" },
  { year: 2017, title: "Redux 已死", killer: "MobX/Context", status: "RTK 复苏" },
  { year: 2018, title: "HTML/CSS 已死", killer: "CSS-in-JS", status: "混战中" },
  { year: 2019, title: "jQuery 插件生态已死", killer: "npm/Yarn", status: "依赖地狱崛起" },
  { year: 2020, title: "Class 组件已死", killer: "Hooks", status: "在遗留库苟活" },
  { year: 2021, title: "Webpack 已死", killer: "ESBuild/Vite", status: "在大厂继续搬砖" },
  { year: 2022, title: "CSS 已死·加强版", killer: "Tailwind", status: "实用主义联盟" },
  { year: 2023, title: "前端开发已死", killer: "GPT-4", status: "变成了 Prompt Engineer" },
  { year: 2024, title: "人类程序员已死", killer: "Cursor/Devin", status: "我们正在用 AI 写这个网站" },
  { year: 2025, title: "浏览器已死", killer: "超级应用/AI", status: "网页仍在呼吸" },
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