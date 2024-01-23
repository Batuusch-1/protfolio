import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleClick}>Scroll to element</button>
      <div style={{ height: "155rem" }} />
      <div ref={ref}>Some content here</div>
      <div style={{ height: "155rem" }} />
    </div>
  );
}
import { useState } from "react";
import styles from "@/styles/Home.module.css";
export const Toggle = () => {
  let [toggle, setToggle] = useState(true);
  const useToggle = () => {
    setToggle(!toggle);
  };
  if (toggle) {
    return (
      <div>
        <button onClick={useToggle} className={styles.toggle}>
          ON
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={useToggle} className={styles.toggle2}>
          OFF
        </button>
      </div>
    );
  }
};

