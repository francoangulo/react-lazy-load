import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import productImgFallback from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  className: customClassName,
  img: imgProp = "",
  style,
}: Props) => {
  const { product } = useContext(ProductContext);

  const imgToShow = imgProp || product?.img || productImgFallback;

  return (
    <img
      src={imgToShow}
      alt="Product"
      className={`${styles.productImg} ${customClassName}`}
      style={style}
    />
  );
};
