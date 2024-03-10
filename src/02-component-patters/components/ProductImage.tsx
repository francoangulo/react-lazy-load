import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import productImgFallback from "../assets/no-image.jpg";

import styles from "../styles/styles.module.css";

export const ProductImage = ({ img: imgProp = "" }) => {
  const {
    product: { img: imgContext },
  } = useContext(ProductContext);

  const imgToShow = imgProp || imgContext || productImgFallback;

  return <img src={imgToShow} alt="Product" className={styles.productImg} />;
};
