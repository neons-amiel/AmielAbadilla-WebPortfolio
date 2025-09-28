import React from "react";
import styles from "/src/bubbles.module.css";

const BubbleText = () => {
  return (
    <h2 className="lg:text-start text-center lg:text-7xl text-5xl font-bold text-teal-300 z-50 cursor-cell">
      {"Im Amiel Abadilla".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};
export default BubbleText;
