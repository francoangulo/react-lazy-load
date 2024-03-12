import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface Props {
  title?: string | undefined;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({
  title,
  className: customClassName,
  style,
}: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span
      className={`${styles.productDescription} ${customClassName}`}
      style={style}
    >
      {title || product.title}
    </span>
  );
};
