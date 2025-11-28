import styles from "./Graveyard.module.css";

const OBSOLETE_TECH = [
  "IE6",
  "Flash",
  "Silverlight",
  "Dreamweaver",
  "FrontPage",
  "Applet",
  "ActiveX",
  "Flex",
  "Fireworks",
];

export default function Graveyard() {
  return (
    <section className={styles.graveyard}>
      <div className={styles.grid}>
        {OBSOLETE_TECH.map((name) => (
          <div key={name} className={styles.cell}>
            <span className={styles.label}>{name}</span>
            <div className={styles.rip}>R.I.P.</div>
          </div>
        ))}
      </div>
    </section>
  );
}