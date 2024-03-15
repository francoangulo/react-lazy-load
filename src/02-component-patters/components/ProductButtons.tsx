import { useCallback, useContext, useMemo } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({
  className: customClassName,
  style,
}: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const incrementDisabled = useMemo(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  const decrementDisabled = useMemo(() => counter === 0, [counter]);

  return (
    <div
      className={`${styles.buttonsContainer} ${customClassName}`}
      style={style}
    >
      <button
        className={`${styles.buttonMinus} ${
          decrementDisabled && styles["decrement-disabled"]
        }`}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          incrementDisabled && styles["increment-disabled"]
        }`}
        onClick={() => increaseBy(1)}
        disabled={incrementDisabled}
      >
        +
      </button>
    </div>
  );
};
